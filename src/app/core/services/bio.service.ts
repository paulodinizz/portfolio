import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bio } from '../models/bio';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  constructor(private http: HttpClient) { }

  getBio() {
   return this.http.get<Bio>('assets/json/bio.json');
  }
}