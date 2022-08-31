import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  @ViewChild('drawer') private drawer!: ElementRef;
  @ViewChild('dimmer') private dimmer!: ElementRef;

  public isDrawOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDraw(): void {
    this.isDrawOpen = !this.isDrawOpen;
    this.isDrawOpen ? this.openDrawer() : this.closeDrawer();
  }

  openDrawer(): void {
    this.drawer.nativeElement.classList.add('open');
    this.dimmer.nativeElement.classList.add('open');
  }

  closeDrawer(): void {
    this.drawer.nativeElement.classList.remove('open');
    this.dimmer.nativeElement.classList.remove('open');
  }
}
