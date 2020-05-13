import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavTestComponent } from './nav-test/nav-test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,NavTestComponent]
})
export class AppModule { 
  constructor(){
    console.log("I am module");
  }
}
