import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuardService } from '../authentication/service/authentication-guard.service';

const mainRoutes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
