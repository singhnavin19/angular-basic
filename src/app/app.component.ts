import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Navin Singh';
  isStructuralTest = true;
  twoWayData: String = "navin"
  pipeBasic: string = "navin singh"
  salaryPipeParameterized: number = 6500000;
  students: any[] = [{ name: "navin" }, { name: "Singh" }];
  anyDataArray: any[] = [{ name: "navin" }, { name: "pravin" }];
  btnClick() {
    alert("i have clicked");
  }
  //Raective From start here 
    signUpForm:FormGroup;
  //   firstName:string="";
  //   lastName:string="";
  //   email:string="";
  // //Reactive form end here

  constructor(private frmBuilder:FormBuilder) {
    console.log("I am componenet ");
    //Raective From start here 
    this.signUpForm=frmBuilder.group({
      fName:new FormControl(),
      lName:new FormControl(),
      emailId:new FormControl()

    });
    //Reactive form end here

  }
  SaveData(regForm: any) {
    console.log(regForm.controls.firstName.value);
    console.log(regForm.controls.lastName.value);
  }
   //Reactive form start here
  postData(signUpForm:any){
    console.log(signUpForm.controls);
    console.log(signUpForm.controls.fName.value);
  }
  //Reactive form end here

}
