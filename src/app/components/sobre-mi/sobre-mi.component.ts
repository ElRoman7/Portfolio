import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
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

  openPdfDialog(): void {
    Swal.fire({
      title: '¿Qué deseas hacer con el CV?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Ver',
      denyButtonText: `Descargar`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Navegar a la ruta del visor de PDF
        window.open('/cv', '_blank');
      } else if (result.isDenied) {
        // Descargar el PDF
        const link = document.createElement('a');
        link.href = 'assets/files/cv.pdf';
        link.download = 'CV-Sergio-Roman.pdf';
        link.click();
      }
    });
  }
}
