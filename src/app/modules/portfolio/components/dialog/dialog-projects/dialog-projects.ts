import { Component, Inject, OnInit, signal } from '@angular/core';
import { Project } from '../../../interface/project.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss',
})
export class DialogProjects implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjects>,
    @Inject(MAT_DIALOG_DATA) private _data: Project
  ) {}

  public getData = signal<Project | null>(null);

  public closeModal() {
    return this._dialogRef.close();
  }

  ngOnInit(): void {
    this.getData.set(this._data);
  }
}
