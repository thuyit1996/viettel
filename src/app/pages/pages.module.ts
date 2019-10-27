import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FeedbackComponent } from './feedback-slider/feedback.component';
import { FrontpageContentComponent } from './frontpage-content/frontpage-content.component';
import { ArticleDigitalsignatureComponent } from './article-digitalsignature/article-digitalsignature.component';
import { ArticleElectricbillComponent } from './article-electricbill/article-electricbill.component';
import { ArticleGuideComponent } from './article-guide/article-guide.component';
import { SocialInsuranceComponent } from './social-insurance/social-insurance.component';
import { TransclusionContainerComponent } from './transclusion-container/transclusion-container.component';
import { FontPageService } from './services/font-page.service';
import { SharingDataComponent } from './sharing-data/sharing-data.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    ProductListComponent,
    ProductItemComponent,
    FeedbackComponent,
    FrontpageContentComponent,
    ArticleDigitalsignatureComponent,
    ArticleElectricbillComponent,
    ArticleGuideComponent,
    SocialInsuranceComponent,
    TransclusionContainerComponent,
    SharingDataComponent,
    MapComponent
  ],
  exports: [

  ],
  providers: [
    FontPageService
  ]
})
export class PagesModule { }
