import { Injectable } from '@angular/core';
import { employee } from 'src/Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  users:employee[]=[]
  getUsers():void{
    let employee:employee
  }
  constructor() { }
  AddUser(data: employee) {
  }

  RemoveUser(id:number){
  }

}
