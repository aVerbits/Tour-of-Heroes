import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['../hero-detail/hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()hero?: Hero;

  constructor() { }

  ngOnInit(): void {
    console.log("111")
  }

}
