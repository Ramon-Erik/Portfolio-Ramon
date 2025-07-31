import { Component, inject, signal } from '@angular/core';
import { Project } from '../../interface/project.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public openDialog(data: Project) {
    this.#dialog.open(
      DialogProjects, {
        data,
        panelClass: EDialogPanelClass.PROJECTS
      }
    )
  }

  public projects = signal<Project[]>([
    {
      title: 'Biblioteca MEJ',
      src: '/assets/img/projects/logo-biblioteca.png',
      alt: 'Imagem do site do MEJ',
      width: '200px',
      height: '150px',
      description: '<p>Site para administração da Biblioteca do MEJ</p>',
      links: {
        git: {
          text: 'Repo. privado',
          url: '!',
        },
        site: {
          text: 'Ver site',
          url: 'https://mej-maranguape.vercel.app',
        },
      },
    },
    {
      title: 'Today Do',
      src: '/assets/img/projects/logo-todo.png',
      alt: 'Imagem do nome do site do todo list',
      width: '400px',
      height: '350px',
      description: '<p>Site para administração da Biblioteca do MEJ</p>',
      links: {
        git: {
          text: 'Repositório',
          url: 'https://github.com/Ramon-Erik/to-do-list-local-storaged',
        },
        site: {
          text: 'Ver site',
          url: 'https://today-do.vercel.app',
        },
      },
    },
  ]);
}
