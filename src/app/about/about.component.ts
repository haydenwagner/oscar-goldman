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
          name: 'Full Stack Developer',
          company: "Teaching and Learning Services, The Wallace Center",
          location: 'Rochester, NY',
          timeFrame: 'August 2016 – Present',
          current: true,
          description: ['Front-end and back-end development with JavaScript, D3.js, Node.js, and Express.js. I am working on two main projects in this position: an application that integrates with Asana’s API and improves the workflow of a captioning process, and an interactive application that models a color science process for online students.'],
          postLinks: []
      },
      {
          name: 'Front-end Developer Intern',
          company: "Industry Dive",
          location: "Washington, DC",
          timeFrame: 'June 2016 - August 2016',
          current: false,
          description: ['Development with JavaScript, Django, Python, Docker, and Vagrant. In this position, I developed and maintained code for Industry Dive’s core Python and Django web framework, and I worked on 3 main projects that used JavaScript and D3.js.'],
          postLinks: []
      }
      ,
      {
          name: 'Content Development Coordinator',
          company: "School of Media Sciences, Rochester Institute of Technology",
          location: "Rochester, NY",
          timeFrame: 'September 2015 – May 2016',
          current: false,
          description: ['Development and media production with HTML, CSS, JavaScript, jQuery, and MailChimp. I continued development of the iOS and Android application that I worked on in my previous position (Front-end Developer), and I maintained webpages and created variable data email campaigns.','I traveled to Los Angeles for the Adobe MAX conference where I discussed my experience on the application project with members of the digital publishing industry.'],
          postLinks: ['school-of-media-sciences-app']
      },
      {
          name: 'Front-end Developer',
          company: "Rochester Institute of Technology",
          location: "Rochester, NY",
          timeFrame: 'May 2015 – August 2015',
          current: false,
          description: ["Front-end development and application management. I developed and coordinated the publishing of showcase app using Adobe's beta digital publishing software: Adobe Experience Manager Mobile. I created interactive and responsive HTML visualizations using HTML, CSS, JavaScript, and D3.js."],
          postLinks: ['school-of-media-sciences-app']
      }
  ];


  ngOnInit() {
  }

}


