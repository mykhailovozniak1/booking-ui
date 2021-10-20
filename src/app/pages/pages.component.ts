import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

import { AuthService } from '../booking-system/services/auth.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = this.filterMenuItems(MENU_ITEMS);

  public filterMenuItems(menuItems) {
    const copyMenuItems = [...menuItems];
    const loggedInAuthSection = [{
      title: 'Logout',
      link: '/auth/logout'
    }];

    const authSectionIndex = copyMenuItems.findIndex(c => c.title === 'Auth');
    if (authSectionIndex !== -1) {
      copyMenuItems[authSectionIndex].children = loggedInAuthSection;
    }

    return copyMenuItems;
  }
}
