import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { SplashComponent } from './splash/splash.component';

import { AppRoutingModule } from "./app-routing.module";

import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PostComponent } from './post/post.component';
import { NavbarModule } from './navbar/navbar.module';
import { FooterComponent } from './footer/footer.component';
import { ReadingSliderComponent } from './reading-slider/reading-slider.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './safe.pipe';
import { AboutComponent } from './about/about.component';

import { ExpansionPanelsModule } from 'ng2-expansion-panels';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsPageComponent,
    SplashComponent,
    PostComponent,
    FooterComponent,
    ReadingSliderComponent,
    NotFoundComponent,
    SafePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
    NavbarModule,
      ExpansionPanelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
