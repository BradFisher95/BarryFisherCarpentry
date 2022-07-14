import { Component } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private themeService: ThemeService,
    private navService: NavigationService
  ) {}

  navigateTo(requestedSection: string) {
    this.navService.navigateTo(requestedSection);
  }

  switchTheme(): void {
    this.themeService.switchTheme();
  }
}
