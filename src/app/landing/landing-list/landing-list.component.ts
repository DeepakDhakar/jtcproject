import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../../models/post.model";
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-landing-list',
  templateUrl: './landing-list.component.html',
  styleUrls: ['./landing-list.component.css']
})
export class LandingListComponent implements OnInit {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public landingService: LandingService) { }

  ngOnInit() {
    this.getPostLists();
   }

  getPostLists() {
    this.posts = this.landingService.getPosts();
    this.postsSub = this.landingService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  Upvoted(i:number) {
    console.log(i);
    this.posts[i].upvotes = this.posts[i].upvotes + 1;
  }
}
