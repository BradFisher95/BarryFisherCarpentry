import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectImage } from 'src/app/models/project';
import { ProjectsService } from 'src/services/projects.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
  public project: Project | undefined;
  public slides: ProjectImage[] = [];
  public currentSlide: number = 0;

  constructor(
    private projectService: ProjectsService,
    private modalService: ModalService,
    private router: ActivatedRoute
  ) {
    this.project = this.projectService.projects.find(
      (project) =>
        project.id === parseInt(this.router.snapshot.params['projectId'])
    );
  }

  ngOnInit(): void {
    this.setSlides();
  }

  setSlides(): void {
    if (this.project) {
      for (let i = 0; i < this.project.images.length; i++) {
        this.slides.push(this.project.images[i]);
      }
    }
  }

  openModal(id: string, slideID: number): void {
    this.currentSlide = slideID;
    console.log(this.currentSlide);
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    this.modalService.close(id);
    console.log(id);
  }
}
