import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { IHero } from '../models/ihero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent {
  constructor(public heroesService: HeroesService, private router: Router) { }

  newHeroName: IHero = { id: 0, name: "" }

  addHero() {
    this.heroesService.addHero().subscribe(() => {
      this.router.navigate(['heroes'])
    })
  }
}
