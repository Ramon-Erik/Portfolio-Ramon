import { Component, signal } from '@angular/core';
import { Projetect } from '../../interface/project.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  public projects = signal<Projetect[]>([
    {
      title: '',
      src: '',
      alt: '',
      width: '100px',
      height: '51px',
      description: '',
      links: {
        git: {
          text: '',
          url: ''
        },
        site: {
          text: '',
          url: ''
        }
      },
    },
    {
      title: '',
      src: '',
      alt: '',
      width: '100px',
      height: '51px',
      description: '',
      links: {
        git: {
          text: '',
          url: ''
        },
        site: {
          text: '',
          url: ''
        }
      },
    },
    {
      title: '',
      src: '',
      alt: '',
      width: '100px',
      height: '51px',
      description: '',
      links: {
        git: {
          text: '',
          url: ''
        },
        site: {
          text: '',
          url: ''
        }
      },
    },
    {
      title: '',
      src: '',
      alt: '',
      width: '100px',
      height: '51px',
      description: '',
      links: {
        git: {
          text: '',
          url: ''
        },
        site: {
          text: '',
          url: ''
        }
      },
    },
  ]);
}
