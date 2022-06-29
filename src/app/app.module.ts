import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { LandingComponent } from './components/sections/landing/landing.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { AccordianComponent } from './components/shared/accordian/accordian.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CarouselComponent, LandingComponent, AboutComponent, ProjectsComponent, ServicesComponent, AccordianComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
