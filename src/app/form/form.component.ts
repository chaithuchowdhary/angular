import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'formsdemo';
  countrylist:country[] = [
    new country("1","India"),
    new country("2","USA"),
    new country("3","Australia")
  ]
  OnSubmit(contactForm: NgForm):void{
    console.log(contactForm.value);
  }
}

class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}