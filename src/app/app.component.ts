import {
  Component,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  QueryList,
} from '@angular/core';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('section', { read: ElementRef })
  Sections!: QueryList<ElementRef>;

  constructor(private navService: NavigationService) {}

  ngAfterViewInit(): void {
    this.navService.Sections = this.Sections;
  }

  title = 'bfishercarpentry';
}
