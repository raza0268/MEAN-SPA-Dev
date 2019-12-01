import { Post } from "./../post.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  // posts = [
  //   { title: "First Post", Content: "This is my first post" },
  //   { title: "Second Post", Content: "This is my second post" },
  //   { title: "Third Post", Content: "This is my third post" }
  // ];
  @Input() posts: Post[] = [];
}
