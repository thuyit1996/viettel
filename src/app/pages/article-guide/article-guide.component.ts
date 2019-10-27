import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pm-article-guide',
  templateUrl: './article-guide.component.html',
  styleUrls: ['./article-guide.component.scss']
})
export class ArticleGuideComponent implements OnInit {
  id: string;
  type: string;
  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDataByUrl();
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
