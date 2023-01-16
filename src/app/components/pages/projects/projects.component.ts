import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects = this.projectService.projects;
  constructor(
    private router: Router,
    private projectService: ProjectsService
  ) {}

  ngOnInit(): void {}

  navigateToProject(project: Project): void {
    this.router.navigate([`/projects/${project.id}`]);
  }
}
