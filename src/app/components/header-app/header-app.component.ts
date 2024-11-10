import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.css'
})
export class HeaderAppComponent {
  appService = inject(AppService);
  constructor(private scrollService: ScrollService) { }

  onNavigateToSection(section: string): void {
    this.scrollService.scrollToElement(section);
  }
}
