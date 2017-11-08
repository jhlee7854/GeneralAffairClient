import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { SideNavigationService } from './service/side-navigation.service';
import { HttpService } from './service/http.service';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule, AppMaterialModule, HttpClientModule, MainRoutingModule
  ],
  providers: [SideNavigationService, HttpService],
  declarations: [LayoutComponent, HeaderComponent, SideNavigationComponent, FooterComponent, HomeComponent]
})
export class MainModule { }
