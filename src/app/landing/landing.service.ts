import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, description: content, creationDate: Date(), upvotes:0};
    console.log("My Post"+JSON.stringify(post));
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  
}
