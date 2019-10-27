import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UrlService } from 'src/app/shared/url.service';
import { FontPageService } from '../services/font-page.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'pm-transclusion-container',
  templateUrl: './transclusion-container.component.html',
  styleUrls: ['./transclusion-container.component.scss']
})
export class TransclusionContainerComponent implements OnInit {
  newsMenu;
  supportMenu;
  currentUrl = ''
  constructor(
    private router: Router,
    private urlService: UrlService,
    private fontPageService: FontPageService
  ) { }

  ngOnInit() {
    forkJoin([
      this.fontPageService.getNews(),
      this.fontPageService.getSupport()
    ]).subscribe(data => {
      this.newsMenu = data[0];
      this.supportMenu = data[1];
    })
    this.currentUrl = this.router.url;
    this.getUrl();
  }

  getUrl() {
    let index;
    for (let i = 0; i < this.currentUrl.length; i++) {
      if (this.currentUrl[i] == '?') {
        index = i;
      }
    }
    if (typeof index != 'undefined') {
      this.currentUrl = this.currentUrl.substring(0, index);
    }
  }

  goToArticle(title, id, type) {
    let navigationExtras: NavigationExtras = {
      "queryParams": {
        title: this.urlService.locDau(title),
        id,
        type,
      }
    }
    this.router.navigate([`${this.currentUrl}`], navigationExtras);
  }

}
