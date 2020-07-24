import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getOnePost(postId): Observable<IPost> {
    return this.httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  }
}
