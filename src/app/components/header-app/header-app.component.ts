import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.css'
})
export class HeaderAppComponent {
  isMenuOpen = false;

  appService = inject(AppService);
  constructor(private scrollService: ScrollService) { }

  onNavigateToSection(section: string): void {
    this.scrollService.scrollToElement(section);
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
