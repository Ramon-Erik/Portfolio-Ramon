import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header";
import { KnowledgeComponent } from '../../components/knowledge/knowledge';
import { ExperiencesCopmponent } from "../../components/experiences/experiences";
import { ProjectsComponent } from '../../components/projects/projects';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, KnowledgeComponent, ExperiencesCopmponent, ProjectsComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
