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
      title: 'Kitchen refits from planning to completion',
      description:
        'Upgrade your kitchen with my exceptional fitting services. I offer tailored designs to match your lifestyle and budget, premium materials for long-lasting beauty, expert craftsmanship and attention to detail, endless style options to suit your taste, smart solutions for small spaces, efficient project management for minimal disruption, and delighting customers with exceptional service. ',
      imgSrc: '../assets/images/kitchens/11.jpg',
    },
    {
      id: 2,
      title: 'Bathroom refits for planning all the way to completion',
      description:
        'Transform your bathroom into a luxurious retreat with my refitting services. <br> <br> Tailored Design Excellence: Collaborate with me to design a personalized space that reflects your style. <br> <br> Premium Quality Materials: I use only the finest materials for beauty and durability that lasts. <br> <br> Enhanced Functionality: Optimize space with clever storage solutions and modern amenities. <br> <br> Seamless Project Management: Sit back and relax as I will handle every aspect. <br> <br> Delighting Customers: I prioritize your satisfaction with transparent pricing and excellent communication.',
      imgSrc: '/assets/images/bathrooms/06.JPG',
    },
    {
      id: 3,
      title: 'All aspects of first and second fix carpentry',
      description:
        'Transforming spaces, one step at a time. I specialize in first fix and second fix carpentry services that bring your vision to life. With precision and craftsmanship, I will lay the strong foundation of your project through expert timber framing, floor installations, and precise door and window fittings. Once the structure is solid, my attention to detail shines in the second fix phase, where I will add the finishing touches that elevate your space to new heights. From quality moldings and skirting boards to beautifully crafted doors, windows, and architraves, I will ensure every detail is flawlessly executed. ',
      imgSrc: '../assets/images/progress-projects/04.jpg',
    },
    {
      id: 4,
      title: 'Wet room installation',
      description:
        'Elevate your bathroom experience and indulge in the perfect blend of style and functionality with an exquisite wet room. <br> <br> I can create a tailored wet room design to match your preferences and space, ensuring a personalized experience that reflects your unique taste. Experience an open and accessible bathroom without tripping hazards. My wet rooms are designed with your safety and convenience in mind. <br> <br> I use premium materials to guarantee durability and timeless beauty. From luxurious tiles to modern fixtures, your wet room will be crafted with the finest elements.',
      imgSrc: '/assets/images/carousel-images/img-1.jpg',
    },
    {
      id: 5,
      title: 'Metal and timber stud partitions & ceilings',
      description:
        'Create functional and aesthetically pleasing spaces with my high-quality metal and timber stud partitions. My partitions offer endless design possibilities, allowing you to customize your space to meet specific requirements. Whether you need to divide a large open area, create private offices, or construct storage areas, my partitions can be tailored to suit your needs. <br> <br> Efficient installation is guaranteed, thanks to the lightweight nature of metal studs and the versatility of timber studs. I will swiftly install the partitions with minimal disruption to your workspace. Beyond functionality, my stud partitions provide soundproofing and privacy, creating peaceful environments for work or relaxation. <br> <br> Transform your space today with the versatility and functionality of my metal and timber stud partitions.',
      imgSrc: '/assets/images/carousel-images/img-3.jpg',
    },
    {
      id: 6,
      title: 'Internal joinery',
      description:
        "Discover the transformative power of my exceptional internal joinery services. I will work closely with you to create bespoke joinery solutions that perfectly match your style and requirements. From stunning cabinetry and shelving to intricate woodwork and architectural features, we will bring your ideas to life with precision and artistry. With superior craftsmanship and meticulous attention to detail, every piece of internal joinery is crafted to perfection, combining traditional woodworking techniques with modern technology for flawless finishes and exquisite details.<br> <br> I believe in using only the finest materials for our joinery projects, ensuring durability, beauty, and sustainability. It seamlessly integrates with your existing architecture and decor, creating a cohesive and visually stunning interior that reflects your unique style. Elevate your interiors to new heights with our exceptional internal joinery solutions. Let's create interiors that truly reflect your unique style and enhance your living environment.",
      imgSrc: '/assets/images/carousel-images/img-1.jpg',
    },
  ]);
  constructor() {}
}
