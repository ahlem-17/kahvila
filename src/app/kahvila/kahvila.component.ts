import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent implements OnInit {
  uusipoydanNumero = '';
  uusimyyntiMaara = '';
 @Output() myytiTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();
 @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero:string, myyntiMaara:string}>();



  constructor() { }

  ngOnInit(): void {
  }
  kahviaMyyty() {
    this.myytiTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    })
    /*
    this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    });*/
  }

  kahviaTarjoiltu() {
    this.tarjoiluTapahtuma.emit({
      poydanNumero: this.uusipoydanNumero,
      myyntiMaara: this.uusimyyntiMaara
    })
  /*  this.tarjoiluOhje.push({
      tyo: 'tarjoiltu',
      poydanNumero: this.poydanNumero,
      myyntiMaara: this.myyntiMaara
    });*/
  }

}
