import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SideNavigationService {
  private navigationSource = new Subject();

  constructor() { }

  get getNavigationSource() {
    return this.navigationSource.asObservable();
  }

  openNavigation() {
    this.navigationSource.next();
  }

}
