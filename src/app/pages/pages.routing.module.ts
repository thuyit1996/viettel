import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ArticleDigitalsignatureComponent } from './article-digitalsignature/article-digitalsignature.component';
import { ArticleElectricbillComponent } from './article-electricbill/article-electricbill.component';
import { ArticleGuideComponent } from './article-guide/article-guide.component';
import { SocialInsuranceComponent } from './social-insurance/social-insurance.component';
import { MapComponent } from './map/map.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'chukyso',
        component: ArticleDigitalsignatureComponent,
      },
      {
        path: 'hoadondientu',
        component: ArticleElectricbillComponent,
      },
      {
        path: 'price',
        component: ArticleGuideComponent,
      },
      {
        path: 'social-insurance',
        component: SocialInsuranceComponent,
      },
      {
        path: 'contact',
        component: MapComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}