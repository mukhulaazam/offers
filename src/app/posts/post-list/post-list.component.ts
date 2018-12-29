import { Component } from '@angular/core';

@Component ({
  selector : 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls : ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: 'First Post', content: 'This is just a dummy content'},
    {title: 'Sceond Post', content: 'This is just a dummy content'},
    {title: 'Third Post', content: 'This is just a dummy content'},
    {title: 'Four Post', content: 'This is just a dummy content'}
  ];
}