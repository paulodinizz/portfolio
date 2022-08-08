import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { groupBy, mergeAll, mergeMap, toArray } from 'rxjs/operators';
import { Skill } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  getSkills() {
    return this.http.get<Skill[]>('assets/json/skills.json')
      .pipe(
        mergeAll(),
        groupBy(skill => skill.category),
        mergeMap(category => category.pipe(toArray())),
        toArray()
      );
  }
}