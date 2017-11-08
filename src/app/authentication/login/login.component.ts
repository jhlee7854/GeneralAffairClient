import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  thisYear: number = new Date().getFullYear();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login();
  }

}
