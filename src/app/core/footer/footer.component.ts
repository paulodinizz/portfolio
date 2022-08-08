import { Component, OnInit } from '@angular/core';
import { SocialsService } from '../services/socials.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerItems$ = this.socialsService.getSocialAccounts();

  constructor(private socialsService: SocialsService) { }
}