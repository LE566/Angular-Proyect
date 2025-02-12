import { Component } from '@angular/core';
import { IonBadge, IonItem, IonLabel, IonList, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../componentes/header/header.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.css'],
  standalone: true, 
  imports: [IonContent, IonBadge, IonItem, IonLabel, IonList,HeaderComponent],
})
export class Tab2Page {
  constructor() {
    
  }
}



