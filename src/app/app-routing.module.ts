import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router'
import { NavTestComponent } from './nav-test/nav-test.component';
import { NavTest2Component } from './nav-test2/nav-test2.component';

const routes:Routes=[{path:'',redirectTo:'navTest',pathMatch:'full'},
                      {path:'navTest',component:NavTestComponent},
                      {path:'navTest2',component:NavTest2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }