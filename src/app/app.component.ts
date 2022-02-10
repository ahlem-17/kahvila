import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kahvila';
  tarjoiluOhje: any = [];
 
  kahvinMyynti(myyntiDate: {poydanNumero:string, myyntiMaara:string}) {
    this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: myyntiDate.poydanNumero,
      myyntiMaara: myyntiDate.myyntiMaara
    });
  
  }

  kahvinTarjoilu(tarjoiluDate: {poydanNumero:string, myyntiMaara:string}) {
    this.tarjoiluOhje.push({
      tyo: 'tarjoilu',
      poydanNumero: tarjoiluDate.poydanNumero,
      myyntiMaara: tarjoiluDate.myyntiMaara
    });

  }

}
