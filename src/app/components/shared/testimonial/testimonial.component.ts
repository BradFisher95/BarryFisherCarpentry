import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements AfterViewInit {
  @ViewChild('img') img!: ElementRef;

  @Input() imgSrc: string | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.imgSrc) {
      return;
    } else {
      this.img.nativeElement.classList.add('hide');
    }
  }
}
