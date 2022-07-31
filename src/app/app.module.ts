import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { accordionComponent } from './components/shared/accordion/accordion.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    AboutComponent,
    ProjectsComponent,
    accordionComponent,
    TestimonialsComponent,
    ContactComponent,
    TestimonialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
