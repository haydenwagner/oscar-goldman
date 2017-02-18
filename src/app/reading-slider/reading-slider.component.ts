import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reading-slider',
  templateUrl: './reading-slider.component.html',
  styleUrls: ['./reading-slider.component.scss']
})
export class ReadingSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  readingCard = [
    {
      link:"google.com",
      name: 'Google'
    },
    {
      link:"google.com",
      name: 'Google'
    },
    {
      link:"google.com",
      name: 'Google'
    },
  ]

}
