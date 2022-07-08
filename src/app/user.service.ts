import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { IUser } from 'src/Models/user';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/';
  
  getUser():Observable<any>{
    return this.http.get<any>(this.url);
  }

  getUserById(id:number){
    return this.http.get<any>(`${this.url}/${id}`);
  }

  AddUser(data:any):Observable<any>{
    let API_URL=this.url;
    return this.http.post(API_URL,data);
  }

  update(data:any):Observable<any>{
    let API_URL=this.url;
    return this.http.put(API_URL,data);
  }
  delete(id: any): Observable<any> {

    let API_Url=this.url;
  
    return this.http.delete(API_Url);
  }
  
}
