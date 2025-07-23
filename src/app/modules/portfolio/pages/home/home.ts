import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { KnowledgeComponent } from '../../components/knowledge/knowledge';
import { ExperiencesCopmponent } from "../../components/experiences/experiences";
import { ProjectsComponent } from '../../components/projects/projects';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesCopmponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
