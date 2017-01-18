import { Injectable } from '@angular/core';

import { PostLinkElement } from './post-link-element';
import { POSTS } from './mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Promise<PostLinkElement[]> {
    //immediately resolved promise b/c we have local data right now
    return Promise.resolve(POSTS);
  }
}
