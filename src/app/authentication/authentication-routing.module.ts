import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const authenticationRoute: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authenticationRoute)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
