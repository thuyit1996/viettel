import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  template: `
     <router-outlet></router-outlet>
  `
})
export class PagesComponent {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    $('.slider-show').bxSlider({ auto: true });
  }
}
