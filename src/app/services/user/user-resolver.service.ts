import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IUser} from '../../models';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUser[]>{

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getAllUsers();
  }
}
