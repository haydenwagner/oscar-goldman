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


  // Fetch all existing post
    getPosts(): Observable<Post[]> {
      // ...using get request
      return this.http.get(this.postsUrl)
      // ...and calling .json() on the response to return data
        .map(res=> res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all existing post
    getPost( post_id ): Observable<Post[]> {
      // ...using get request
      return this.http.get(this.postUrl + post_id)
      // ...and calling .json() on the response to return data
        .map(res=> res.json())
        //...errors if any
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
