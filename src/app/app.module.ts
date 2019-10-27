import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './componentTemplate/template.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
