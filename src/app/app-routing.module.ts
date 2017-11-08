import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationGuardService } from './authentication/service/authentication-guard.service';
import {LayoutComponent} from './main/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, canActivate: [AuthenticationGuardService], children: [
    { path: '', component: HomeComponent }
  ] },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
