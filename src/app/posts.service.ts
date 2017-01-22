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
    {
      id:"1",
      title: "Post number one with the header",
      author: "Hayden",
      preview: "Super preview text, when you read this you will want to read the entire article. This is the article for you! This is the lead in for when the header can not be handled by the reader",
      pubDate: "1/10/17",
      markdown:"<h3>Summary</h3>\n\n<ul>\n<li>Test bullet</li>\n<li>Another one</li>\n<li>Another one</li>\n<li>And another one</li>\n</ul>\n\n<h3>Swipe Movement</h3>\n\n<p>When a user swipes the slider the “left” property of a div that holds the images is adjusted, so that the images appear to move with the user’s finger. After the used releases their finger the holder div is centered on the closest image, meaning that if the user swipes further than the halfway point between the current image and the next image then the slider will move to the next image.</p>\n\n<h3>Cycle Buttons</h3>\n\n<p>Buttons are offered to the user to cycle the images if they are on desktop or do not want to swipe between images. If a button is tapped or clicked the holder div will move so that the next image in that button’s direction is centered. The corresponding button will disappear if the current image is at the beginning or end of the available images.</p>\n\n<p>````\n     this si code and this is the code block and how it \n     will look when it is       </p>\n\n<pre><code> indented\n\n dlkjkkldjasldfdsafsdfdas\n shit this is not working\n back to this line lets try it\n</code></pre>\n\n<p>````</p>\n\n<p><em>test italic shit this italic test is really nice maybe</em></p>\n\n<h3>Conclusion</h3>\n\n<p>This slider is an improvement on my first image slider because it is more visually appealing and it allows mobile users to swipe between images.</p>\n\n<p><strong>Additionally, multiple image sliders can be easily added to any webpage, and captions can be added to the images (shown below).</strong>  </p>"
    },
    {
      id:"2",
      title: "Post number one with the header",
      author: "Hayden",
      preview: "When you want to use that bash right in the IDE",
      pubDate: "1/22/17",
      markdown:"<!--Using Git Bash in the native Webstorm terminal (Windows)-->\n\n<p>Intro\nI got used to working with a set of commands that are different between bash and the windows command line (ex. 'dir' to show current directory on windows is 'ls' in bash)</p>\n\n<h3>1 - Webstorm default</h3>\n\n<p>setting: cmd.exe</p>\n\n<p><img src=\"../assets/temp/images/1_terminal-default-windows.jpg\" alt=\"Default terminal\" title=\"Terminal with default Webstorm settings (windows)\" />\nresult (pic 1)</p>\n\n<h3>2 - Change terminal setting to git-bash executable (still wrong)</h3>\n\n<p>setting: C:\\Program Files\\Git\\git-bash.exe</p>\n\n<p>Result: (pic 2)</p>\n\n<h3>1 - Webstorm default</h3>\n\n<p>setting: C:\\Program Files\\Git\\bin\\sh.exe</p>\n\n<p>Command executes the shell that would be executed in the git-bash program, but it doesn't open up a new git-bash window. </p>\n\n<p>Result: (pic 3)</p>\n\n<p>Type all the same commands that you are used to with git-bash, all inside of the webstorm IDE. This means you don't have to switch\nout of your IDE to run bash commands, and with Webstorm you can open multiple shells as tabs within the terminal interface.</p>\n\n<p>(pic 4)</p>"
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
