import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    $('.slider-show').bxSlider({ auto: true });
  }
}
