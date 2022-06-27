import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  switchTheme(): void {
    this.themeService.switchTheme();
  }
}
