import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesAddComponent } from './heroes-add/heroes-add.component';

const routes: Routes = [
  {
    title: "Heroes List",
    path: 'heroes',
    component: HeroesListComponent
  }, {
    title: "Hero Add",
    path: 'add',
    component: HeroesAddComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
