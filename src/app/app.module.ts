import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HomeComponent } from './components/pages/home/home.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { AccordionComponent } from './components/shared/accordion/accordion.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { NavLinksComponent } from './components/shared/nav-links/nav-links.component';
import { HeaderModule } from './components/shared/header/header.module';
import { HamburgerComponent } from './components/shared/hamburger/hamburger.component';
import { CardComponent } from './components/shared/card/card.component';
import { SingleProjectComponent } from './components/pages/single-project/single-project.component';
import { CarouselDialogComponent } from './components/shared/dialogs/carousel-dialog/carousel-dialog.component';
import { ProjectCarouselComponent } from './components/shared/project-carousel/project-carousel.component';
import { ModalComponent } from './components/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    AboutComponent,
    ProjectsComponent,
    AccordionComponent,
    TestimonialsComponent,
    ContactComponent,
    TestimonialComponent,
    NavLinksComponent,
    FooterComponent,
    CardComponent,
    HamburgerComponent,
    SingleProjectComponent,
    CarouselDialogComponent,
    ProjectCarouselComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
