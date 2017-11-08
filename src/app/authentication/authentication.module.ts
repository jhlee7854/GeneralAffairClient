import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    CommonModule, AppMaterialModule, AuthenticationRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
