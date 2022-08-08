import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { BioService } from '../services/bio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'Sobre Mim', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'Minhas Skills', homePath: '/', fragment: 'skills', pagePath: '/skills' },
    { title: 'Meus Projetos', homePath: '/', fragment: 'projects', pagePath: '/projects' },
  ];
  smMenuItems = this.menuItems.concat([
    { title: 'Entre em contato', homePath: '/', fragment: 'contact', pagePath: '/contact' },
  ]);


  constructor(private bioService: BioService, private headerService: HeaderService) { }
}