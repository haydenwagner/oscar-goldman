import{ Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../posts.service';

@Component({
  selector: 'posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostService]
})
export class PostsPageComponent implements OnInit {
  posts;
  isPostsRoute: Boolean;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute){ }

  ngOnInit(): void {

    console.log(this.route.snapshot);

    //this seems super hacky, but I can't find a better way right now
    //will look for updates in the future
    if(this.route.snapshot.url.length > 0){
      this.isPostsRoute = this.route.snapshot.url[0].path === "posts" ? true : false;
    }

    if(!this.posts) this.getPosts();
  }

  getPosts(): void{
    this.postService.getPosts().subscribe(res=> {
        this.posts = res.reverse();
    });
  }
}
