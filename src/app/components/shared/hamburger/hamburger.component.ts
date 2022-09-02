import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  @ViewChild('hamburger') private hamburger!: ElementRef;
  @ViewChild('drawer') private drawer!: ElementRef;
  @ViewChild('content') private content!: ElementRef;
  @ViewChild('dimmer') private dimmer!: ElementRef;

  public isDrawOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.isDrawOpen = !this.isDrawOpen;
    this.isDrawOpen ? this.openDrawer() : this.closeDrawer();
  }

  openDrawer(): void {
    this.hamburger.nativeElement.classList.add('open');
    this.drawer.nativeElement.classList.add('open');
    this.content.nativeElement.classList.add('visible');
    this.dimmer.nativeElement.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  closeDrawer(): void {
    this.hamburger.nativeElement.classList.remove('open');
    this.drawer.nativeElement.classList.remove('open');
    this.content.nativeElement.classList.remove('visible');
    this.dimmer.nativeElement.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
}
