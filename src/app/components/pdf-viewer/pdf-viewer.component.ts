import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [SafeUrlPipe],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent{
  pdfSrc = 'assets/files/cv.pdf'; // Ruta al archivo PDF

}
