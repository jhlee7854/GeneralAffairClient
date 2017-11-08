import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SideNavigationService } from '../service/side-navigation.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit, OnDestroy {
  private sideNav;

  @ViewChild('sideNavigation')
  sideNavigation;

  constructor(private sideNavigationService: SideNavigationService) { }

  ngOnInit() {
    this.sideNav = this.sideNavigationService.getNavigationSource.subscribe(() => this.sideNavigation.toggle());
  }

  ngOnDestroy(): void {
    this.sideNav.unsubscribe();
  }

}
