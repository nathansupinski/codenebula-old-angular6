import { Component } from '@angular/core';

@Component({selector: 'app-home-carousel-basic', templateUrl: './homeCarousel.component.html'})
export class AppHomeCarouselBasic {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
