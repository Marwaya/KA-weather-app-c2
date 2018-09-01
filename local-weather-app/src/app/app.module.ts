import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
