import { Component, signal } from '@angular/core';
import { Knowladge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class KnowledgeComponent {
  public knowledge = signal<Knowladge[]>([
  {
    src: 'assets/icons/knowledge/html5.svg',
    alt: 'Ícone da logo do HTML'
  },
  {
    src: 'assets/icons/knowledge/css3.svg',
    alt: 'Ícone da logo do CSS'
  },
  {
    src: 'assets/icons/knowledge/javascript.svg',
    alt: 'Ícone da logo do JavaScript'
  },
  {
    src: 'assets/icons/knowledge/angular.svg',
    alt: 'Ícone da logo do Angular'
  },
  {
    src: 'assets/icons/knowledge/typescript.svg',
    alt: 'Ícone da logo do Typescript'
  }
  ]);
}
