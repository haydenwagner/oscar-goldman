import{ Component, OnInit } from '@angular/core';


import { PostLinkElement } from '../post-link-element';
import { PostService } from '../post.service';

@Component({
  selector: 'posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostService]
})
export class PostsPageComponent implements OnInit {
  postLinkElements: PostLinkElement[];

  constructor(private postService: PostService){ }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void{
    this.postService.getPosts().then(posts => this.postLinkElements = posts);
  }

}
