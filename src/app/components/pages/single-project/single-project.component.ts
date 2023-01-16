import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/services/projects.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
  public project: Project | undefined;

  constructor(
    private projectService: ProjectsService,
    private router: ActivatedRoute
  ) {
    this.project = this.projectService.projects.find(
      (project) =>
        project.id === parseInt(this.router.snapshot.params['projectId'])
    );
  }

  ngOnInit(): void {}
}
