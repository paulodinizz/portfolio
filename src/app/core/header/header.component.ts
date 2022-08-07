import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

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
    { title: 'Meus Projetos', homePath: '/', fragment: 'projects', pagePath: '/projects' },
  ];

  constructor(private bioService: BioService, private headerService: HeaderService) { }
}