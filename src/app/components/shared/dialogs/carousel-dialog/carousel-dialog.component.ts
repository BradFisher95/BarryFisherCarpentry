import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { ProjectImage } from 'src/app/models/project';

@Component({
  selector: 'app-carousel-dialog',
  templateUrl: './carousel-dialog.component.html',
  styleUrls: ['./carousel-dialog.component.scss'],
})
export class CarouselDialogComponent implements OnInit {
  constructor() {}

  @Input() slides: ProjectImage[] = [];
  @Input() currentSlide: number = 0;
  @Output()
  closeModalEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {}

  closeModal(): void {
    this.closeModalEmitter.emit('carousel-modal');
  }
}
