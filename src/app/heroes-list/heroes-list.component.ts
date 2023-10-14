import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { IHero } from '../models/ihero';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  constructor(public heroesService: HeroesService) {
  }
 
}
