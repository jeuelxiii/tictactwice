import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  player1;
  player2;

  newWinner;
  newPlayer;

  twices = ["nayeon", "jeongyeon", "momo", "sana", "jihyo", "mina", "dahyun", "chaeyoung", "tzuyu"];




  constructor() { }

  ngOnInit(): void {
    this.newGame();
    
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.player1 = '';
    this.player2 = '';
  }

  get player(){
    return this.xIsNext ? '1' : '2';
  }

  makeMove(idx: number){

    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    if(this.player1 === '' || this.player2 === ''){
      alert('Please pick first a player');
      this.newGame();
    }

  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  ngOnChanges(changes: SimpleChanges){
    let change = changes['winner'];
    console.log(change)
    if(change.firstChange != change.currentValue){
      this.endGame();
    }
   }
    

  endGame(){
    if(this.winner == '1'){
      alert('Player 1 Wins!');
      this.newGame();
    } else if(this.winner == '2'){
      alert('Player 2 Wins!');
      this.newGame();
    }
  }

}
