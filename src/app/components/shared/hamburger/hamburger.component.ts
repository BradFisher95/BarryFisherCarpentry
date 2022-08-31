import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  @ViewChild('drawer') private drawer!: ElementRef;

  public isDrawOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDraw(): void {
    this.isDrawOpen ? (this.isDrawOpen = false) : (this.isDrawOpen = true);

    if (this.isDrawOpen) {
      this.drawer.nativeElement.classList.add('open');
    } else this.drawer.nativeElement.classList.remove('open');
  }
}
