import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Navin Singh';
  isStructuralTest=true;
  btnClick(){
    alert("i have clicked");
  }
  constructor(){
    console.log("I am componenet ");
  }
}
