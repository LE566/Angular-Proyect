import { Component } from '@angular/core';
import { IonChip, IonContent} from '@ionic/angular/standalone';
import { HeaderComponent } from '../componentes/header/header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.css'],
  standalone: true, 
  imports: [IonChip, IonContent, HeaderComponent],
})
export class Tab3Page {
  constructor() {}
}
