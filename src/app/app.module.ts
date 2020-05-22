import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import{ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { MyPipePipe } from './my-pipe.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavTest2Component } from './nav-test2/nav-test2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    NavTest2Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("I am module");
  }
}
