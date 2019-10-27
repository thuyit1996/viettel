import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pm-social-insurance',
  templateUrl: './social-insurance.component.html',
  styleUrls: ['./social-insurance.component.scss']
})
export class SocialInsuranceComponent implements OnInit {
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
