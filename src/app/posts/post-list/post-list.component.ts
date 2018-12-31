import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component ({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   // {title: 'First Post', content: 'This is just a dummy content'},
  //   // {title: 'Sceond Post', content: 'This is just a dummy content'},
  //   // {title: 'Third Post', content: 'This is just a dummy content'},
  //   // {title: 'Four Post', content: 'This is just a dummy content'}
  // ];
  posts: Post [] = [];
  private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
      this.posts = this.postsService.getPosts();
      this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    }

    ngOnDestroy() {
      this.postsSub.unsubscribe();
    }
}
