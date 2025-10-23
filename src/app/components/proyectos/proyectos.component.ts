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
  {
    title: 'Bienes Raíces',
    description: 'Proyecto de Bienes Raices el cual cuenta con mapa para ver la ubicacion de cada una de las propiedades, panel de administración, autentificación segura, envío de correos, paginación, filtros, drop-image y es responsive.',
    img: 'assets/img/bienesraices.png',
    link: 'https://bienesraices.sromandev.click'
  },
  {
    title: 'CartEase',
    description: 'Proyecto E-Commerce con panel de administración de usuarios, productos, promociones, pedidos, carrito, envío de correos, autentificación para usuarios y empleados/administradores y es responsive',
    img: 'assets/img/ecommerce.png',
    link: 'https://ecommerce.sromandev.click'
  },
  {
    title: 'Guitar-LA',
    description: 'Proyecto FrontEnd de una tienda de guitarras con carrito de compras utilizando Local Storage, proyecto hecho con React utilizando TS.',
    img: 'assets/img/guitar-la.png',
    link: 'http://guitar-la.sromandev.click'
  },
  {
    title: "Teslo Shop",
    description: "API para un proyecto E-Commerce completo con autenticación de usuarios, administración de productos, subida de imágenes, paginación, roles de usuario, generación de tokens JWT, y documentación de API con Swagger. Implementado con NestJS y PostgreSQL.",
    img: "assets/img/teslo-shop.png",
    link: "https://teslo-shop.sromandev.click/api"
  },
  {
    title: "Lavorum",
    description: "Proyecto con arquitectura desacoplada (Frontend y Backend separados), desarrollado con NestJS y PostgreSQL en el backend, React en el frontend, e integración de modelos de aprendizaje automático con TensorFlow.js. Plataforma tipo bolsa de trabajo que permite la gestión de vacantes, perfiles de candidatos y análisis inteligente de coincidencias.",
    img: "assets/img/lavorum.png",
    link: "https://lavorum.sromandev.click"
  }
  ];
}

