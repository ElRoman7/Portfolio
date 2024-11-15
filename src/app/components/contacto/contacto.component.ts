import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  appService = inject(AppService);
  email = 'sergio.romam@outlook.com';

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
