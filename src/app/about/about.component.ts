import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  positions = [
      {
          name: 'Test position',
          description: 'This is the test position I was in for 2 seconds.',
          postLinks: [
              'd3-data-bind-selections'
          ]
      },
      {
          name: 'Test position',
          description: 'This is the test position I was in for 2 seconds.',
          postLinks: [
              'slideswell'
          ]
      }
  ];


  ngOnInit() {
  }

}
