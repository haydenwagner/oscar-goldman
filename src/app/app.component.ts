import {Component, OnInit} from '@angular/core';


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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor(private router: Router){
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    })
  }

  ngOnInit(){
    this.router.events.subscribe(evt => {
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
      //document.body.scrollTop = 0;
      console.log("scrolltop");
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
