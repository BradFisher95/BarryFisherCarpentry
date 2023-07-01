import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public projects: Project[] = [
    {
      id: 0,
      title: 'Kitchens',
      images: [
        { src: '/assets/images/kitchens/01.jpg' },
        { src: '/assets/images/kitchens/04.jpg' },
        { src: '/assets/images/kitchens/05.jpg' },
        { src: '/assets/images/kitchens/06.jpg' },
        { src: '/assets/images/kitchens/07.jpg' },
        { src: '/assets/images/kitchens/08.jpg' },
        { src: '/assets/images/kitchens/09.jpg' },
        { src: '/assets/images/kitchens/10.jpg' },
        { src: '/assets/images/kitchens/11.jpg' },
        { src: '/assets/images/kitchens/12.jpg' },
      ],
      keyImage: { src: '/assets/images/kitchens/11.jpg' },
    },
    {
      id: 1,
      title: 'Bathrooms',
      images: [
        { src: '/assets/images/bathrooms/20.jpg' },
        { src: '/assets/images/bathrooms/21.jpg' },
        { src: '/assets/images/bathrooms/04.jpg' },
        { src: '/assets/images/bathrooms/02.jpg' },
        { src: '/assets/images/bathrooms/26.jpg' },
        { src: '/assets/images/bathrooms/28.jpg' },
        { src: '/assets/images/bathrooms/01.jpg' },
        { src: '/assets/images/bathrooms/03.jpg' },
        { src: '/assets/images/bathrooms/23.jpg' },
        { src: '/assets/images/bathrooms/05.jpg' },
        { src: '/assets/images/bathrooms/06.jpg' },
        { src: '/assets/images/bathrooms/07.jpg' },
        { src: '/assets/images/bathrooms/22.jpg' },
        { src: '/assets/images/bathrooms/08.jpg' },
        { src: '/assets/images/bathrooms/09.jpg' },
        { src: '/assets/images/bathrooms/10.jpg' },
        { src: '/assets/images/bathrooms/11.jpg' },
        { src: '/assets/images/bathrooms/12.jpg' },
        { src: '/assets/images/bathrooms/13.jpg' },
        { src: '/assets/images/bathrooms/25.jpg' },
        { src: '/assets/images/bathrooms/14.jpg' },
        { src: '/assets/images/bathrooms/24.jpg' },
        { src: '/assets/images/bathrooms/15.jpg' },
        { src: '/assets/images/bathrooms/16.jpg' },
        { src: '/assets/images/bathrooms/27.jpg' },
        { src: '/assets/images/bathrooms/17.jpg' },
        { src: '/assets/images/bathrooms/18.jpg' },
      ],
      keyImage: { src: '/assets/images/bathrooms/05.jpg' },
    },
  ];
}
