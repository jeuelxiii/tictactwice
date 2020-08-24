import { Component, AfterViewChecked, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O';
  @Input() player1: string;
  @Input() player2: string;

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

    if (this.value == 'X') {
      this.isPlayer = true;
    } else if (this.value == 'O') {
      this.isPlayer = false;
    }

  }


  clickedLog() {
    console.log(this.player1);
    console.log(this.player2);
  }



}
