import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs'
import { IHero } from './models/ihero';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private get baseUrl(): string {
    return 'http://localhost:4441/api/'
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  heroes: Observable<IHero[]> = this.http.get<IHero[]>(`${this.baseUrl}heroes`)

  newHeroName: IHero = { id: 0, name: "" }

  addHero() {
    return this.http.post(`${this.baseUrl}heroes`, this.newHeroName, this.httpOptions)
  }
}
