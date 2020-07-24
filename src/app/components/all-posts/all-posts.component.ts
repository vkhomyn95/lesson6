import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../models';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: IPost[];
  form: FormGroup;
  selectField: FormControl = new FormControl('');

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.posts = value.allPosts);
    this.form = new FormGroup({
      selectField: this.selectField
    });
  }

  ngOnInit(): void {
  }

  getPost(): void {
    this.router.navigate(['posts', this.selectField.value.id]);
  }
}
