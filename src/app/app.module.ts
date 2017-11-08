import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './authentication/authentication.module';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationGuardService } from './authentication/service/authentication-guard.service';
import { AuthenticationService } from './authentication/service/authentication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /* Angular Modules */
    BrowserModule, BrowserAnimationsModule,
    /* App Modules */
    AuthenticationModule, MainModule,
    AppRoutingModule
  ],
  providers: [AuthenticationGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
