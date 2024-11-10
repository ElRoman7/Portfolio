import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

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
