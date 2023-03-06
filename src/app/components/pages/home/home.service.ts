import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Service } from 'src/app/models/service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public services: BehaviorSubject<Service[]> = new BehaviorSubject<Service[]>([
    {
      id: 1,
      title: 'All aspects of first and second fix carpentry',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '../assets/images/kitchens/11.jpg',
    },
    {
      id: 2,
      title: 'Kitchen refits from planning to completion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '../assets/images/kitchens/11.jpg',
    },
    {
      id: 3,
      title: 'Wet room insulations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '/assets/images/carousel-images/img-1.jpg',
    },
    {
      id: 4,
      title: 'Loft conversions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '/assets/images/carousel-images/img-4.jpg',
    },
    {
      id: 5,
      title: 'Metal and timber stud partitions & ceilings',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '/assets/images/carousel-images/img-3.jpg',
    },
    {
      id: 6,
      title: 'Interal and external joinery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '/assets/images/carousel-images/img-1.jpg',
    },
    {
      id: 7,
      title: 'Bathroom refits for planning all the way to completion',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod tempus consequat. Ut id tincidunt felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean at feugiat odio. Aenean convallis magna tortor, et aliquam augue sagittis sit amet. Vivamus pellentesque et magna id congue. Vivamus aliquet, sem in pharetra placerat, libero lacus rutrum felis, at suscipit metus dolor et neque. Nam sodales, turpis sed venenatis consectetur, massa est facilisis eros, eget accumsan risus ante eu dui. Praesent sollicitudin nibh mi, id consequat neque pulvinar vitae. Fusce accumsan magna in lectus ullamcorper, ac luctus justo imperdiet. Duis ullamcorper ipsum leo, eu interdum ligula venenatis id. Sed cursus eros enim, eleifend fermentum felis ullamcorper euismod. Mauris in consectetur libero. Cras vitae sodales ipsum. ',
      imgSrc: '/assets/images/carousel-images/img-4.jpg',
    },
  ]);
  constructor() {}
}
