import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingListComponent } from './landing/landing-list/landing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
