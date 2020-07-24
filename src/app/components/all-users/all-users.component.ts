import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../models';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: IUser[];
  form: FormGroup;
  fieldToSelect: FormControl = new FormControl('');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users = value.allUsers);
    this.form = new FormGroup({
      fieldToSelect: this.fieldToSelect
    });
  }

  ngOnInit(): void {
  }

  getUser(): void {
    this.router.navigate(['users', this.fieldToSelect.value.id]);
  }
}
