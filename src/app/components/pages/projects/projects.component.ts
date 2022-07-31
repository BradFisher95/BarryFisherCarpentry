import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [
    { id: 0, title: 'project-1', images: [] },
    { id: 1, title: 'project-2', images: [] },
    { id: 2, title: 'project-3', images: [] },
    { id: 3, title: 'project-4', images: [] },
    { id: 0, title: 'project-1', images: [] },
    { id: 1, title: 'project-2', images: [] },
    { id: 2, title: 'project-3', images: [] },
    { id: 3, title: 'project-4', images: [] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
