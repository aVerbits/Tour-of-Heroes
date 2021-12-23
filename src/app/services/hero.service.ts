import { Injectable } from '@angular/core';
import { Hero } from '../models';
import { HEROES } from '../mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor() { }

// getHeroes(): Hero[] {
//   return HEROES;
// }

getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
}
