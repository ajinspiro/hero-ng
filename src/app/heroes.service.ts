import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { IHero } from './models/ihero';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private get baseUrl(): string {
    return 'http://localhost:4441/api/'
  }

  constructor(private http: HttpClient) { }

  heroes: Observable<IHero[]> = this.http.get<IHero[]>(`${this.baseUrl}heroes`)

}
