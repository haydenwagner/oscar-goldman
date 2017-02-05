import { Injectable } from '@angular/core';

import { Post } from './post';

import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  private postsUrl = 'http://localhost:3000/api/posts';
  private postUrl = 'http://localhost:3000/api/post/';


  posts = [
    // {
    //   id:"1",
    //   cardImage:"../assets/temp/images/2/3_terminal-complete.jpg",
    //   title: "Post number one with the header",
    //   author: "Hayden",
    //   preview: "Super preview text, when you read this you will want to read the entire article. This is the article for you! This is the lead in for when the header can not be handled by the reader",
    //   pubDate: "1/10/17",
    //   mainPoints: [
    //     "sip zip dip",
    //     "potato chip"
    //   ],
    //   markdown:"<h3>Summary</h3>\n\n<ul>\n<li>Test bullet</li>\n<li>Another one</li>\n<li>Another one</li>\n<li>And another one</li>\n</ul>\n\n<h3>Swipe Movement</h3>\n\n<p>When a user swipes the slider the “left” property of a div that holds the images is adjusted, so that the images appear to move with the user’s finger. After the used releases their finger the holder div is centered on the closest image, meaning that if the user swipes further than the halfway point between the current image and the next image then the slider will move to the next image.</p>\n\n<h3>Cycle Buttons</h3>\n\n<p>Buttons are offered to the user to cycle the images if they are on desktop or do not want to swipe between images. If a button is tapped or clicked the holder div will move so that the next image in that button’s direction is centered. The corresponding button will disappear if the current image is at the beginning or end of the available images.</p>\n\n<p>````\n     this si code and this is the code block and how it \n     will look when it is       </p>\n\n<pre><code> indented\n\n dlkjkkldjasldfdsafsdfdas\n shit this is not working\n back to this line lets try it\n</code></pre>\n\n<p>````</p>\n\n<p><em>test italic shit this italic test is really nice maybe</em></p>\n\n<h3>Conclusion</h3>\n\n<p>This slider is an improvement on my first image slider because it is more visually appealing and it allows mobile users to swipe between images.</p>\n\n<p><strong>Additionally, multiple image sliders can be easily added to any webpage, and captions can be added to the images (shown below).</strong>  </p>"
    // },
    {
      id:"2",
      cardImage:"../assets/temp/images/2/3_terminal-complete.jpg",
      title: "Make your WebStorm terminal great",
      author: "Hayden",
      preview: `Are you using Webstorm + git-bash + Windows? Integrate it all to make your terminal tasks super organized.`,
      pubDate: "1/22/17",
      mainPoints: [
        "To change WebStorm's terminal shell to the git-bash shell you should change the terminal's shell path setting to <kbd>C:\\Program Files\\Git\\bin\\sh.exe</kbd>",
        "This is helpful for developers who want to take advantage of WebStorm's integrated terminal and still use bash commands in their shell."
      ],
      markdown:"<!--Using Git Bash in the native Webstorm terminal (Windows)-->\n\n<!--add note about path to git assumption-->\n\n<div class=\"alert alert-info\" role=\"alert\">\n  <strong>Note</strong>: If the path to your Git directory is not <kbd>C:\\Program Files\\Git</kbd> you will have to adjust the paths\n  in this post for the git-bash shell to work.\n</div>\n\n<h2>WebStorm terminal settings</h2>\n\n<p>In WebStorm you can find the terminal settings under <samp>File/Settings/Terminal</samp> in the WebStorm interface. Here you can\nchange the 'shell path' setting to change the shell in the integrated terminal.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/2/terminal-settings.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Terminal settings in WebStorm\">\n  <figcaption class=\"figure-caption\">The WebStorm terminal settings window</figcaption>\n</figure></p>\n\n<h2>Default terminal shell</h2>\n\n<p>Shell path: <kbd>cmd.exe</kbd></p>\n\n<p>This is the default terminal shell in WebStorm(the windows command line shell). I wanted to get this same behavior in WebStorm with the git-bash shell. </p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/2/1_terminal-default-windows.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Terminal with default Webstorm settings\">\n  <figcaption class=\"figure-caption\">WebStorm integrated terminal with default shell</figcaption>\n</figure></p>\n\n<h2>Git Bash terminal shell path</h2>\n\n<p>Shell path: <kbd>C:\\Program Files\\Git\\bin\\sh.exe</kbd></p>\n\n<p>Here is the path that gave me exactly what I was looking for&mdash;with this terminal shell path WebStorm will open a new \nintegrated terminal tab running the git-bash shell. </p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/2/3_terminal-complete.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Terminal with the git-bath shell exe\">\n  <figcaption class=\"figure-caption\">WebStorm integrated terminal with shell path set to the git-bash shell exe</figcaption>\n</figure></p>\n\n<p><mark>This is great for windows developers who use a bash shell because they can use the bash commands that they are familiar with while\nbenefiting from the efficiency of an integrated terminal.</mark></p>\n\n<p>The efficiency is noticeable when you use multiple bash shells, as they are all organized as tabs inside the WebStorm terminal tool, instead of separate git-bash windows.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/2/4_terminal-4-different-git-bash-shells.jpg\" class=\"figure-img img-fluid rounded\" alt=\"WebStorm terminal with multiple bash shells\">\n  <figcaption class=\"figure-caption\">WebStorm terminal with four bash shells as different tabs</figcaption>\n</figure></p>\n\n<div class=\"alert alert-warning\" role=\"alert\">\n\n  Don't set the terminal shell path to the git-bash exe file: \n\n  <p><kbd>C:\\Program Files\\Git\\git-bash.exe</kbd></p>\n\n  <p>This path does start a git-bash shell, but it opens each new shell in a new window that is not integrated with the terminal.</p>\n\n  <figure class=\"figure\">\n    <img src=\"../assets/temp/images/2/2_terminal-git-bash-path.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Terminal with the git-bath path exe\">\n    <figcaption class=\"figure-caption\">WebStorm integrated terminal with shell path set to the git-bash exe</figcaption>\n  </figure>\n</div>"
    },
    {
      "id":"3",
      "cardImage":"../assets/temp/images/3/cmp_image-pan.jpg",
      "title": "Cross media publishing project",
      "author": "Hayden",
      "preview": "An undergraduate group project that optimized an information system",
      "pubDate": "1/25/17",
      "mainPoints": [
        "This project's main goal was to improve the organization of a set of existing help documents that had been published by our school’s publishing center",
        "The final deliverables were the republished documents in print and web format",
        "We used information schemas, xml markup and templating, and HTML and AJAX to create the project deliverables",
      ],
      "markdown":"<!-- Title: Cross Media Publishing Project -->\n\n<!-- An undergraduate group project which involved organizing and structuring information before publishing to multiple media -->\n\n<!--\nMain Points\n- This project's main goal was to improve the organization of a set of existing help documents that had been published by our school’s publishing center \n- The final deliverables were the republished documents in print and web format\n- We used information schemas, xml markup and templating, and HTML and AJAX to create the project deliverables\n-->\n\n<h2>Information structuring</h2>\n\n<h5>Planning and schema creation</h5>\n\n<p>Initially, we created user personas, use cases, and wireframes to focus the project scope and determine a structure for different information types. With these use cases in mind, we created our project’s XML schema. </p>\n\n<p>Our schema defined the different types of possible information that could be contained in the documents, the relationships of the different information types, and the allowed number of occurrences of every information type.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/3/schema.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Visualization of our schema made in Oxygen XML editor\">\n  <figcaption class=\"figure-caption\">Visualization of our schema made in Oxygen XML editor</figcaption>\n</figure></p>\n\n<h5>Custom XML</h5>\n\n<p>The information structure was then used to create an extensible markup language (XML) that was applied to the original content. Our group used XSL, a family of languages that allows users to navigate and transform XML documents, to generate our final documents.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/3/xsl-screenshot.jpg\" class=\"figure-img img-fluid rounded\" alt=\"XSL commands used to transform our XML documents\">\n  <figcaption class=\"figure-caption\">XSL commands used to transform our XML documents</figcaption>\n</figure></p>\n\n<h2>Document generation</h2>\n\n<h5>Print document generation</h5>\n\n<p>After the XSL templates were created, we used XSL:FO, a specific transformation language that is used for creating page layouts with XML documents, to generate PDF documents. </p>\n\n<h5>HTML document generation</h5>\n\n<p>To generate the HTML documents we used the same content and the same XML schema, but we applied a different transformation process that places the XML content into a HTML markup 'skeleton'.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/3/html-screenshot.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Sample of a generated HTML document\">\n  <figcaption class=\"figure-caption\">Sample of a generated HTML document</figcaption>\n</figure></p>\n\n<h2>Website development</h2>\n\n<h5>Wireframes</h5>\n\n<p>First we created desktop and mobile wireframes to plan and organize the different views of our website.</p>\n\n<figure class=\"figure\">\n  <img src=\"../assets/temp/images/3/wireframe--desktop2-small.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Wireframe of website's desktop view\">\n  <figcaption class=\"figure-caption\">Wireframe of website's desktop view</figcaption>\n</figure>\n<!--(wireframe slider? in future...not worrying about slider right now, will just be one pic) -->\n\n<p>With the wireframes complete my team hosted our generated HTML documents, and styled our website elements to match the look of our wireframes.</p>\n\n<h5>AJAX</h5>\n\n<p>The website incorporates Asynchronous JavaScript and XML (AJAX) in the navigation between categories and documents, which allows the website to only reload the parts of the webpage that need to change when a user switches documents or categories.</p>\n\n<p><figure class=\"figure\">\n  <video class=\"gfy-video\" autoplay=\"\" loop=\"\" playsinline=\"\" muted=\"\" poster=\"https://thumbs.gfycat.com/DefiniteWhimsicalElectriceel-poster.jpg\" style=\"width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;\"><source src=\"https://zippy.gfycat.com/DefiniteWhimsicalElectriceel.webm\" type=\"video/webm\" class=\"webmsource\"><source src=\"https://zippy.gfycat.com/DefiniteWhimsicalElectriceel.mp4\" type=\"video/mp4\" class=\"mp4source\"></video>\n  <figcaption class=\"figure-caption\">Webpage using AJAX to switch documents and avoid a full page&nbsp;reload</figcaption>\n</figure></p>\n\n<h2>Final Thoughts</h2>\n\n<ul>\n<li><p>The project was very process heavy&mdash;we spent most of our time planning and creating information structures so that we could streamline the process of publishing the documents.</p></li>\n<li><p>This project was successful; because these PDF and HTML documents were generated using the same information schema and markup, the information contained within the documents was formatted consistently. This was a great improvement over the formatting of content in the original documents, and it creates a solid framework for continuing to create well-formatted documents.</p></li>\n</ul>"
    },
    {
      "id":"4",
      "cardImage":"../assets/temp/images/4/ipad2.jpg",
      "title": "School of Media Sciences App",
      "author": "Hayden",
      "preview": "A digital publishing app made with a beta Adobe publishing framework.",
      "pubDate": "1/26/17",
      "mainPoints": [
        "I worked on this project over a ten week period with another student; we were advised by two of our professors from our program",
        "Our main goal was to create an interactive application, using new Adobe software, that showcased the School of Media Sciences at RIT to potential students, current students, and alumni"
      ],
      "markdown":"<!-- Title: School of Media Sciences App -->\n\n<!-- A digital publishing app I worked on in a co-op position at the Rochester Institute of Technology. The app features interactive articles and was made with an experimental Adobe publishing framework.-->\n\n<!--\nMain Points\n- I worked on this project over a ten week period with another student; we were advised by two of our professors from our program. \n- Our main goal was to create an interactive application, using new Adobe software, that showcased the School of Media Sciences at RIT to potential students, current students, and alumni.\n-->\n\n<h2>App interface examples</h2>\n\n<p>Shown below are examples of the most recent versions of the app’s home screen and article design on different devices.</p>\n\n<p><figure class=\"figure\">\n  <div class=\"col-8\">\n    <img src=\"../assets/temp/images/4/ipad1.jpg\" alt=\"Tablet and mobile interface examples\">\n   </div>\n  <figcaption class=\"figure-caption\">Tablet and mobile interface examples</figcaption>\n</figure></p>\n\n<h2>Project approach</h2>\n\n<p>My project team beta tested Adobe's new digital publishing beta: Adobe Experience Manager—Mobile. This software moves away from monthly digital publication releases towards fluid, constantly updating content with a higher level of user interaction.</p>\n\n<p>The articles for the application were either static or interactive; the static articles were InDesign documents, and the interactive articles were web pages.</p>\n\n<h3>Interactive articles</h3>\n\n<p>As the \"technical lead\" of this project I was responsible for creating and testing interactive content, and handling app settings, layout, and distribution.</p>\n\n<p>Interactive articles for the app were created using HTML, CSS, and JavaScript to ensure proper device resizing and a high level of user interaction. Adobe's software allowed me to directly publish these html articles to our application.</p>\n\n<h4>Co-op map</h4>\n\n<p>The co-op map is an interactive article I made that uses the Google Maps API and JavaScript to display the locations of student’s co-op companies. Clicking the map points shows more details about the companies in that location. The map features a filter function that allows the user to filter the points on the map by location and industry.</p>\n\n<p><figure class=\"figure\">\n  <img src=\"../assets/temp/images/4/mapPanZoom.jpg\" class=\"figure-img img-fluid rounded\" alt=\"Screenshot of the co-op map interactive article\">\n  <figcaption class=\"figure-caption\">Screenshot of the co-op map interactive article</figcaption>\n</figure></p>\n\n<h4>Co-op industry visualization donut graph</h4>\n\n<p>The Co-op Industry donut graph is an interactive article I made in which users touch sections of a \"donut\" graph to see what percentage of our students get co-ops in that industry.</p>\n\n<p>This article uses JavaScript and D3.js to create the animations that occur when a user interacts with the graph. If the user chooses an industry that is related to another app story, the article will display a link to that story at the bottom of the page (shown at the end of the .gif below).</p>\n\n<p><figure class=\"figure\">\n<video class=\"gfy-video\" autoplay=\"\" loop=\"\" playsinline=\"\" muted=\"\" poster=\"https://thumbs.gfycat.com/InformalQuaintCleanerwrasse-poster.jpg\" style=\"width: 100%; height: 100%; position: absolute; top: 0px; left: 0px;\"><source src=\"https://zippy.gfycat.com/InformalQuaintCleanerwrasse.webm\" type=\"video/webm\" class=\"webmsource\"><source src=\"https://zippy.gfycat.com/InformalQuaintCleanerwrasse.mp4\" type=\"video/mp4\" class=\"mp4source\"></video>\n  <figcaption class=\"figure-caption\">Interactive 'donut' graph visual in action</figcaption>\n</figure></p>\n\n<h2>App store logistics</h2>\n\n<p>It was also my job to manage the app submission and distribution processes through the Apple App Store and the Google Play Store. It's actually kind of hard! Managing the different licenses and certs you need to actually publish apps is pretty confusing if you are doing it for the first time. We worked it out eventually, but getting the iOS certs correct on a work computer took a while.</p>\n\n<div class=\"alert alert-danger\" role=\"alert\">\n <h2>Download the App for iOS or Android</h2>\n\n  <p><strong>Alert</strong>: I have moved on from this position, and I believe the app is not being managed or updated anymore. That is the nature of projects that are developed by students and teams that eventually must graduate.</p> \n\n  <p>You can still find the app with the links below; however, I don't know if it will be fully operational.</p>\n\n\n  <!--appstore links-->\n  <div class=\"div_appstore-links\">\n  <a href=\"https://geo.itunes.apple.com/us/app/rit-media-sciences/id1034416975?mt=8\"><img src=\"http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg\"></a>\n\n  <a href=\"https://play.google.com/store/apps/details?id=edu.rit.smsappandroid&amp;hl=en&amp;utm_source=global_co&amp;utm_medium=prtnr&amp;utm_content=Mar2515&amp;utm_campaign=PartBadge&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\" ><img alt=\"Get it on Google Play\" src=\"https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png\"></a>\n  </div>\n</div>"
    }
  ]


    /*
    // Fetch all existing post
    getPosts(): Observable<Post[]> {
      // ...using get request
      return this.http.get(this.postsUrl)
      // ...and calling .json() on the response to return data
        .map(res=> res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }*/

    getPosts(){
      return this.posts;
    }

    /*
    // Fetch all existing post
    getPost( post_id ): Observable<Post[]> {
      // ...using get request
      return this.http.get(this.postUrl + post_id)
      // ...and calling .json() on the response to return data
        .map(res=> res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    } */

    getPost( post_id ) {
      return this.posts.filter(post => {
        return post.id === post_id;
      })[0];
    }



}
