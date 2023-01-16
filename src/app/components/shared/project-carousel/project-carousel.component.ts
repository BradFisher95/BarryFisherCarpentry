import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProjectImage } from 'src/app/models/project';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})
export class ProjectCarouselComponent implements OnInit {
  @Input() slides: ProjectImage[] = [];
  @Input() currentSlide: number = 0;
  @Output()
  closeModalEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  closeModal(): void {
    this.closeModalEmitter.emit('carousel-modal');
  }
}
