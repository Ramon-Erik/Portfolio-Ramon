import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { KnowledgeComponent } from '../../components/knowledge/knowledge';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
