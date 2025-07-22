import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { KnowledgeComponent } from '../../components/knowledge/knowledge';
import { Experiences } from "../../components/experiences/experiences";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, Experiences],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
