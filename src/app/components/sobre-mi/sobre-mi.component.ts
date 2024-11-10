import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css'
})
export class SobreMiComponent {
  images : string[] = [
    'assets/img/html.png',
    'assets/img/sass.png',
    'assets/img/js.png',
    'assets/img/ts.png',
    'assets/img/nodejs.png',
    'assets/img/nestjs.png',
    'assets/img/angular.png',
    'assets/img/php.png',
    'assets/img/laravel.png'
  ]
}
