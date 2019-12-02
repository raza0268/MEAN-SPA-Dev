import { PostService } from "./../posts.service";
import { Post } from "./../post.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: "First Post", Content: "This is my first post" },
  //   { title: "Second Post", Content: "This is my second post" },
  //   { title: "Third Post", Content: "This is my third post" }
  // ];
  posts: Post[] = [];
  private postSub: Subscription;
  constructor(public postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts();
    this.postSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
