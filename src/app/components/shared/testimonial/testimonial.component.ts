import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  @ViewChild('img') img!: ElementRef;

  @Input() imgSrc: string | undefined;

  constructor() {}
}
