import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { orientation } from './nav-links.enum';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent implements OnInit {
  @ViewChild('links') private links!: ElementRef;

  @Input() isVertical: boolean = false;

  public Orientation: orientation = orientation.Horizontal;

  constructor() {}

  setOrientation(): void {
    this.isVertical
      ? (this.Orientation = orientation.Vertical)
      : (this.Orientation = orientation.Horizontal);
  }

  ngOnInit(): void {
    this.setOrientation();
  }
}
