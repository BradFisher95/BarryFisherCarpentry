import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { accordionComponent } from './components/shared/accordion/accordion.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { NavLinksComponent } from './components/shared/nav-links/nav-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ProjectsComponent,
    accordionComponent,
    TestimonialsComponent,
    ContactComponent,
    TestimonialComponent,
    NavLinksComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
