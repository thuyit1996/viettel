import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'pm-article-digitalsignature',
  templateUrl: './article-digitalsignature.component.html',
  styleUrls: ['./article-digitalsignature.component.scss']
})
export class ArticleDigitalsignatureComponent implements OnInit {
  id: string;
  type: string;
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDataByUrl();
    window.scrollTo(0, 0);
  }

  getDataByUrl() {
    this.activateRoute.queryParams.pipe(
      tap(params => {
        this.id = params["id"];
        this.type = params["type"];
      })
    ).subscribe();
  }
}
