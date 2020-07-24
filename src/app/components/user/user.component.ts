import { Component, OnInit } from '@angular/core';
import {IUser} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(activatedRouteValue => {
      this.userService.getOneUser(activatedRouteValue.id).subscribe(uValue => this.user = uValue);
    });
  }

  ngOnInit(): void {
  }

}
