import { Injectable } from '@angular/core';

import { Post } from './post';

import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

    private postsUrl = 'https://www.haydenwagner.com/api/posts';
    private postUrl = 'https://www.haydenwagner.com/api/post/';

    //Fetch all existing posts
    getPosts(){
        return this.http.get(this.postsUrl)
            .map(res=> res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all existing post
    getPost( post_url ): Observable<Post> {
          return this.http.get(this.postUrl + post_url)
              .map(res=> res.json())
              .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}

