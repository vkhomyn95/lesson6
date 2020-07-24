import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {UserResolverService} from './services/user/user-resolver.service';
import {PostResolverService} from './services/post/post-resolver.service';
import {ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { UserComponent } from './components/user/user.component';

const toAllUsers = {
  path: 'users',
  component: AllUsersComponent,
  resolve: {allUsers: UserResolverService},
  children: [
    {path: ':id', component: UserComponent}
  ]
};
const toAllPosts = {
  path: 'posts',
  component: AllPostsComponent,
  resolve: {allPosts: PostResolverService},
  children: [
    {path: ':id', component: PostComponent}
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    AllUsersComponent,
    PostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      toAllPosts,
      toAllUsers
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
