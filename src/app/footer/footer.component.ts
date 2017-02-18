import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  footerData = {
    "copyrightLinkContent": {
      "mit":"rel='license' href='https://github.com/twbs/bootstrap/blob/master/LICENSE' target='_blank'",
      'cc3':'rel="license" href="https://creativecommons.org/licenses/by/3.0/" target="_blank"'
    },
    "buildNoteLinkContent": {
      "ng2":"rel='angular link' href='https://angular.io/' target='_blank'",
      'heroku':'rel="heroku link" href="https://www.heroku.com/" target="_blank"',
      'repo':'rel="site repo link" href="https://github.com/haydenwagner/oscar-goldman" target="_blank"'
    }
  }

  buildNote = `Site built with the <a ${this.footerData.buildNoteLinkContent.ng2}>Angular 2</a> web framework&mdash;check 
              out the source code on <a ${this.footerData.buildNoteLinkContent.repo}>Github</a>.
              All code licensed <a ${this.footerData.copyrightLinkContent.mit}>MIT</a>, site content <a ${this.footerData.copyrightLinkContent.cc3}>CC BY 3.0</a>`;
}
