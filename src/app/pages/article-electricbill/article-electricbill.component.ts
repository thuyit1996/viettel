import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
declare var $;

@Component({
  selector: 'pm-article-electricbill',
  templateUrl: './article-electricbill.component.html',
  styleUrls: ['./article-electricbill.component.scss']
})
export class ArticleElectricbillComponent implements OnInit {
  id: string;
  type: string;
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDataByUrl();
    window.scrollTo(0, 0);
    $('pm-root').scrollTop(0);
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
