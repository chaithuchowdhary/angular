import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login_status:string="";
  flag:boolean=false;
  OnSubmit(loginForm: NgForm):void{
    console.log(loginForm.value.username);
    console.log(loginForm.value.password)
    if(loginForm.value.username==="chaithanya.e@lntinfotech.com" && loginForm.value.password==="1234"){
      this.flag=true;
    }
    if(this.flag){
      this.login_status="Successfull";
    }
    else{
      this.login_status="fail";
    }
  }
}