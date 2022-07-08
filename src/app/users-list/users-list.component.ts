import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersfromservice:any=[];

  constructor(private _userservice:UserService) { }

  ngOnInit(): void {
    this._userservice.getUser().subscribe(
      data=>this.usersfromservice=data
    )
  }
  deleteuser(id:number){
    if(confirm("Are you sure ?")){
      this._userservice.delete(id);
    }
  }
}
