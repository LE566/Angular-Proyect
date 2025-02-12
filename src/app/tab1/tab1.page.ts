import { Component } from '@angular/core';
import { IonContent ,IonButton, IonAlert} from '@ionic/angular/standalone';
import { HeaderComponent } from '../componentes/header/header.component';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonContent,IonButton,IonAlert, HeaderComponent],
})
export class Tab1Page {
  pokemones: any
  pokemon: any
  constructor(private api: ServicioService) {}
  ngOnInit(){
    this.api.getPokemons().subscribe((vaca:any) => {
      this.pokemones = vaca
    })
    this.api.getPokemon().subscribe((vaca2:any) => {
      this.pokemon = vaca2
      console.log(this.pokemon)
    })
  }
  nombre="jorge"
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red',
    },
    {
      label: 'Blue',
      type: 'radio',
      value: 'blue',
    },
    {
      label: 'Green',
      type: 'radio',
      value: 'green',
    },
  ];

}