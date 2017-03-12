import{ Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    siteNoteParagraphs = [
        "This site is built with <strong>Angular, a JavaScript web framework</strong>. It is normally for for applications larger than this site because it requires a longer initial load time than traditional websites.",
        "The load time is unnecessary for a site this size, but I chose to use Angular to get more familiar with the framework and workflow of developing and deploying an Angular app.",
        "I am currently prioritizing the structure and content of this site, but after those are more complete I will work on decreasing the initial site load time."
    ];
}

//https://medium.com/@_zaknelson/minimizing-initialization-time-in-angularjs-f8ae57e2cec3#.aalcv2m4v