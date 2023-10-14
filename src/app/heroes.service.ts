import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { IHero } from './models/ihero';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  get baseUrl(): string {
    return 'http://localhost:4441/api/'
  }

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(`${this.baseUrl}heroes`)
  }
}
