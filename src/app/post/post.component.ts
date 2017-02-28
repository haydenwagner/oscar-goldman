import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Post } from '../post';
import { PostService } from '../posts.service';

//view encapsulation set to 'none' to allow for styling of
//innerHTML content (the post markdown)
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  //post: Post[];
  post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.getPost( params['url'] );
    })
  }

  getPost( post_url: string ): void{
    // this.postService.getPost( post_id ).subscribe(p => {
    //   console.log(p);
    //   this.post = p;
    // });
    this.post = this.postService.getPost( post_url );
    this.post.markdown = this.sanitizer.bypassSecurityTrustHtml(this.post.markdown);
  }

}
