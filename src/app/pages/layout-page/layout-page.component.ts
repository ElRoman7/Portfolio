import { Component } from '@angular/core';
import { HeaderAppComponent } from '../../components/header-app/header-app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SobreMiComponent } from '../../components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from '../../components/proyectos/proyectos.component';

@Component({
  standalone: true,
  imports: [HeaderAppComponent, RouterModule, SobreMiComponent, ProyectosComponent],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
