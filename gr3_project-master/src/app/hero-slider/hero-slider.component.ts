import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss'
})
export class HeroSliderComponent implements OnInit {

  slides: any[] = new Array(1).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/hero/bg1.jpg',
      title: 'The Silent Stage: An Empty Theater',
    }
    this.slides[1] = {
      id: 1,
      src: './assets/img/hero/bg2.jpg',
      title: 'Quiet Haven: The Empty Family House',
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/hero/bg3.jpg',
      title: 'Forgotten Craft: The Abandoned Car Workshop',

    }
    this.slides[3] = {
      id: 2,
      src: './assets/img/hero/bg4.jpg',
      title: 'Echoes of Industry: The Abandoned Ship Factory',

    }
    this.slides[4] = {
      id: 0,
      src: './assets/img/hero/bg6.jpg',
      title: 'Reverie Amidst Ruins: Recollections in the Abandoned House',

    }
    this.slides[5] = {
      id: 0,
      src: './assets/img/hero/bg12.jpg',
      title: 'A Forgotten Dive: The Abandoned Olympic Swimming Pool',

    }
    this.slides[6] = {
      id: 0,
      src: './assets/img/hero/bg13.jpg',
      title: 'Arts Silent Canvas: The Empty Garage',

    }
  }
}