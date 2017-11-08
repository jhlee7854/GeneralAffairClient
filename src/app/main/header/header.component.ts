import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from '../service/side-navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavigationService: SideNavigationService, private router: Router) { }

  ngOnInit() {
  }

  openNavigation() {
    this.sideNavigationService.openNavigation();
  }

  moveToHome() {
    this.router.navigate(['']);
  }

}
