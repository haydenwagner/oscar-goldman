import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  post: Post[];

  constructor(
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.getPost( params['id'] );
    })
  }

  getPost( post_id: number ): void{
    // this.postService.getPost( post_id ).subscribe(p => {
    //   console.log(p);
    //   this.post = p;
    // });
    this.post = this.postService.getPost( post_id );
  }

}
