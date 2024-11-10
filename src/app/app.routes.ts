import { Routes } from '@angular/router';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        title: 'Portfolio',
        loadComponent: () => import('./pages/layout-page/layout-page.component').then(m => m.LayoutPageComponent)
      }
    ]
  },
  { path: 'cv', component: PdfViewerComponent },
];
