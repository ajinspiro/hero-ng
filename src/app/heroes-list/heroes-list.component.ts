import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { IHero } from '../models/ihero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  constructor(private heroesService: HeroesService) {
  }
  heroes: IHero[] = []

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(x => this.heroes = x)
  }
}
