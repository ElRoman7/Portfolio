import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  appService = inject(AppService);
  images: string[] = [
    'assets/img/html.png',
    'assets/img/sass.png',
    'assets/img/js.png',
    'assets/img/ts.png',
    'assets/img/nodejs.png',
    'assets/img/nestjs.png',
    'assets/img/angular.png',
    'assets/img/php.png',
    'assets/img/laravel.png'
  ];
}
