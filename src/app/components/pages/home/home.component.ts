import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { HomeService } from './home.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public services$: Observable<Service[]> =
    this.homeService.services.asObservable();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}
}
