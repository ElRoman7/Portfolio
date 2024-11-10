import { Component } from '@angular/core';
import { AppCard } from '../../interface/app-card.interface';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  projects : AppCard[] = [
  {title: 'Bienes Raíces', description: 'Proyecto de Bienes Raices el cual cuenta con mapa para ver la ubicacion de cada una de las propiedades, panel de administración, autentificación segura, envío de correos, paginación, filtros, drop-image y es responsive.', img: 'assets/img/bienesraices.png', link: 'https://bienesraices.sromandev.click'},
  {title: 'CartEase', description: 'Proyecto E-Commerce con panel de administración de usuarios, productos, promociones, pedidos, carrito, envío de correos, autentificación para usuarios y empleados/administradores y es responsive', img: 'assets/img/ecommerce.png', link: 'https://ecommerce.sromandev.click'},
  ];
}

