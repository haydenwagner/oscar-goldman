import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { PostsPageComponent }   from './posts-page/posts-page.component';
import { PostComponent }        from './post/post.component';
import { NotFoundComponent }    from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'posts', component: PostsPageComponent},
    { path: 'post/:url', component: PostComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
