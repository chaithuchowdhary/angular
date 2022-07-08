import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { ValidationComponent } from './validation/validation.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  // {path:'**',component:PageNotFoundComponent},
  {path:"form",component:FormComponent},
  {path:"validation",component:ValidationComponent},
  {path:'authentication',component:AuthenticationComponent},
  {path:'home',component:HomeComponent},
  {path:"users",component:UsersListComponent},
  {path:"emplist",component:EmpListComponent},
  {path:"userlist",component:UsersListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
