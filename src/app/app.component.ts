import { Component } from '@angular/core';

import {
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  Router
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = true;

  constructor(private router: Router){
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    })
  }

  navigationInterceptor(event: RouterEvent): void {
    if(event instanceof NavigationStart) {
      this.loading = true;
    }
    if(event instanceof NavigationEnd) {
      this.loading = false;
    }

    if(event instanceof NavigationCancel){
      this.loading = false;
    }
    if(event instanceof  NavigationError){
      this.loading = false;
    }
  }
}
