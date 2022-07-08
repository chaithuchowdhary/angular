import { Component, OnInit } from '@angular/core';
import { employee } from 'src/Models/employee';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee:any={}
}
