import { Component } from '@angular/core';

interface Certification {
  name: string;
  platform: string;
  date: string;
  type: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      name: 'Junior Penetration Tester',
      platform: 'TryHackMe',
      date: '2023',
      type: 'Certificación',
      img: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-29EMTXTAYQ.png',
      link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-29EMTXTAYQ.png'
    },
    {
      name: 'Design Thinking',
      platform: 'Universidad de Guadalajara',
      date: '2024',
      type: 'Certificación',
      img: 'assets/img/design-thinking.png',
      link: '#'
    },
    {
      name: 'Nest: Desarrollo backend escalable con Node',
      platform: 'Udemy',
      date: '2024',
      type: 'Curso',
      img: 'assets/img/nestjs.png',
      link: 'https://www.udemy.com/course/nest-framework/'
    },
    {
      name: 'Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs',
      platform: 'Udemy',
      date: '2024',
      type: 'Curso',
      img: 'assets/img/nodejs.png',
      link: 'https://www.udemy.com/course/nodejs-bootcamp-desarrollo-web-mvc-y-rest-apis/'
    },
    {
      name: 'Angular: De cero a experto',
      platform: 'Udemy',
      date: '2023-2024',
      type: 'Curso',
      img: 'assets/img/angular.png',
      link: 'https://www.udemy.com/course/angular-fernando-herrera'
    },
    {
      name: 'Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL',
      platform: 'Udemy',
      date: '2023',
      type: 'Curso',
      img: 'assets/img/php.png',
      link: 'https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/'
    }

  ]
}
