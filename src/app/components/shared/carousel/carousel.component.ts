import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  public images: string[] = [
    '../assets/images/kitchens/11.jpg',
    '../assets/images/bathrooms/06.JPG',
    '../assets/images/kitchens/13.jpg',
    '../assets/images/kitchens/04.JPG',
    '../assets/images/bathrooms/07.JPG',
  ];
  public currentImage: number = 0;
  private interval: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setCurrentImage(0);
    this.autoplayCarousel();
  }

  setCurrentImage(newImage: number): void {
    clearInterval(this.interval);
    let scroller = this.el.nativeElement.querySelector('.inline-scroller');
    let imgElements = this.el.nativeElement.querySelectorAll('.carousel-img');
    let navigators = this.el.nativeElement.querySelectorAll('.navigator');
    let scrollOffset = imgElements[newImage].offsetLeft;
    for (let i = 0; i < navigators.length; i++) {
      navigators[i].classList.remove('selected');
    }
    navigators[newImage].classList.add('selected');
    this.currentImage = newImage;
    scroller.scrollLeft = scrollOffset;
    this.autoplayCarousel();
  }

  autoplayCarousel(): void {
    this.interval = setInterval(() => {
      if (this.currentImage + 1 >= this.images.length) {
        this.setCurrentImage(0);
      } else {
        this.setCurrentImage(this.currentImage + 1);
      }
    }, 5000);
  }
}
