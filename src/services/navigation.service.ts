import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public Sections!: QueryList<ElementRef>;
  public scrollOffset: number = 0;

  constructor() {}

  navigateTo(requestedSection: string): void {
    this.Sections.forEach((element) => {
      if (element.nativeElement.id === requestedSection) {
        this.scrollOffset = element.nativeElement.offsetTop - 100;
        window.scrollTo({ top: this.scrollOffset, behavior: 'smooth' });
      }
    });
  }
}
