import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models';
// import { HEROES } from '../../mocks';
import { HeroService } from 'src/app/services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  constructor(private heroService: HeroService) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
