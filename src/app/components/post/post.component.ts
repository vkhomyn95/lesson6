import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post/post.service';
import {IPost} from '../../models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
      this.activatedRoute.params.subscribe(activatedRouteValue => {
        this.postService.getOnePost(activatedRouteValue.id).subscribe(postValue => this.post = postValue);
      });
  }

  ngOnInit(): void {
  }

}
