import{ Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../posts.service';

@Component({
  selector: 'posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostService]
})
export class PostsPageComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService){ }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void{
    //this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.posts = this.postService.getPosts();
  }

}
