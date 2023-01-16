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
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-2.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-4.jpg' },
        { src: '/assets/images/carousel-images/img-5.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-2.jpg' },
    },
    {
      id: 1,
      title: 'Bathrooms',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-2.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-2.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-4.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-1.jpg' },
    },
    {
      id: 2,
      title: 'Loft Conversions',
      images: [
        { src: '/assets/images/carousel-images/img-2.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-4.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-2.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-4.jpg' },
        { src: '/assets/images/carousel-images/img-5.jpg' },
        { src: '/assets/images/carousel-images/img-1.jpg' },
        { src: '/assets/images/carousel-images/img-2.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-3.jpg' },
    },
    {
      id: 3,
      title: 'project-4',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-4.jpg' },
    },
    {
      id: 4,
      title: 'project-1',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-4.jpg' },
    },
    {
      id: 5,
      title: 'project-2',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-1.jpg' },
    },
    {
      id: 6,
      title: 'project-3',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-2.jpg' },
    },
    {
      id: 7,
      title: 'project-4',
      images: [
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
        { src: '/assets/images/carousel-images/img-3.jpg' },
      ],
      keyImage: { src: '/assets/images/carousel-images/img-3.jpg' },
    },
  ];
}