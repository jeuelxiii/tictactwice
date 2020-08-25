import { Component, AfterViewChecked, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: '1' | '2';
  @Input() player1: string;
  @Input() player2: string;
  @Input() winner: string;
  @Input() squares = [];

  isPlayer: boolean;

  player1Link;
  player2Link;

  twice = "../../assets/twice-logo.jpg"

  constructor() { }



  ngOnInit() {

    switch (this.player1) {
      case "nayeon":
        this.player1Link = "../../assets/nayeon.jpg";
        break;
      case "jeongyeon":
        this.player1Link = "../../assets/jeonyeon.jpg";
        break;
      case "momo":
        this.player1Link = "../../assets/momo.jpg";
        break;
      case "sana":
        this.player1Link = "../../assets/sana.jpg";
        break;
      case "jihyo":
        this.player1Link = "../../assets/jihyo.jpg";
        break;
      case "mina":
        this.player1Link = "../../assets/mina.jpg";
        break;
      case "dahyun":
        this.player1Link = "../../assets/dahyun.jpg";
        break;
      case "chaeyoung":
        this.player1Link = "../../assets/chaeyoung.jpg";
        break;
      case "tzuyu":
        this.player1Link = "../../assets/tzuyu.jpg";
        break;
      default:
        this.player1Link = "../../assets/twice-logo.jpg";
    }


    switch (this.player2) {
      case "nayeon":
        this.player2Link = "../../assets/nayeon.jpg";
        break;
      case "jeongyeon":
        this.player2Link = "../../assets/jeonyeon.jpg";
        break;
      case "momo":
        this.player2Link = "../../assets/momo.jpg";
        break;
      case "sana":
        this.player2Link = "../../assets/sana.jpg";
        break;
      case "jihyo":
        this.player2Link = "../../assets/jihyo.jpg";
        break;
      case "mina":
        this.player2Link = "../../assets/mina.jpg";
        break;
      case "dahyun":
        this.player2Link = "../../assets/dahyun.jpg";
        break;
      case "chaeyoung":
        this.player2Link = "../../assets/chaeyoung.jpg";
        break;
      case "tzuyu":
        this.player2Link = "../../assets/tzuyu.jpg";
        break;
      default:
        this.player2Link = "../../assets/twice-logo.jpg";
    }

    if (this.value == '1') {
      this.isPlayer = true;
    } else if (this.value == '2') {
      this.isPlayer = false;
    }

    if(this.player1 === '' || this.player2 === ''){
      this.value = null;
    }



    this.endGame();
  }

  endGame(){
    if(this.winner == '1'){
      alert('Player 1 Wins!');

    } else if(this.winner == '2'){
      alert('Player 2 Wins!');
    }

    if(this.squares.length = 9){
      if(!this.squares.includes(null)){
        alert('Draw!');
      }
      }
    

  }





}
