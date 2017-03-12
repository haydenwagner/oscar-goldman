import{ Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    siteNoteParagraphs = [
        "This site is built with <strong>Angular, a JavaScript web&nbsp;framework</strong>.",
        "Angular is normally used to build applications that are much larger that this site; an application built with Angular can be more powerful and efficient than a simple website, but usually it will have a longer initial page load&nbsp;time.",
        "The load time is unnecessary for a site this size, but I chose to use Angular to get more practice with the framework and learn more about the workflow of developing an Angular&nbsp;app.",
        "I am currently prioritizing the structure and content of this site, but after those are complete I will work on decreasing the initial site load&nbsp;time."
    ];
}

//https://medium.com/@_zaknelson/minimizing-initialization-time-in-angularjs-f8ae57e2cec3#.aalcv2m4v