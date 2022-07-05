import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class accordionComponent {
  @ViewChild('arrow') Arrow!: ElementRef;
  @ViewChild('info') Info!: ElementRef;

  toggleInfo(): void {
    this.Arrow.nativeElement.classList.toggle('selected');
    this.Info.nativeElement.classList.toggle('open');
  }
}
