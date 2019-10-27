import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrlService } from './url.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UrlService
  ]
})
export class SharedModule { }
