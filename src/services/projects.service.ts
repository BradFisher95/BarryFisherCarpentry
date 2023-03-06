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
        { src: '/assets/images/kitchens/11.jpg' },
        { src: '/assets/images/kitchens/04.JPG' },
        { src: '/assets/images/kitchens/07.jpg' },
        { src: '/assets/images/kitchens/08.jpg' },
        { src: '/assets/images/kitchens/15.jpg' },
        { src: '/assets/images/kitchens/13.jpg' },
      ],
      keyImage: { src: '/assets/images/kitchens/11.jpg' },
    },
    {
      id: 1,
      title: 'Bathrooms',
      images: [
        { src: '/assets/images/bathrooms/06.JPG' },
        { src: '/assets/images/bathrooms/05.JPG' },
        { src: '/assets/images/bathrooms/09.JPG' },
        { src: '/assets/images/bathrooms/10.JPG' },
        { src: '/assets/images/bathrooms/11.JPG' },
        { src: '/assets/images/bathrooms/12.JPG' },
        { src: '/assets/images/bathrooms/13.JPEG' },
      ],
      keyImage: { src: '/assets/images/bathrooms/06.JPG' },
    },
  ];
}
