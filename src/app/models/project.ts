export interface Project {
  id: number;
  title: string;
  images: ProjectImage[];
  keyImage: ProjectImage;
}

export interface ProjectImage {
  src: string;
}
