import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { PostsPageComponent }   from './posts-page/posts-page.component';
import { PostComponent }        from './post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'posts', component: PostsPageComponent},
  { path: 'post/:id', component: PostComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
