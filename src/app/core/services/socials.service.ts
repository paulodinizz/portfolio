import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Social } from '../models/socials';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http: HttpClient) { }

  getSocialAccounts() {
    return this.http.get<Social[]>('assets/json/socials.json');
  }
}