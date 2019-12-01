import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./create-post.component.html"
  // styleUrls: ['./app.component.css']
})
export class CreatePostComponent {
  title = "mean-spa";
  newPost = "NO CONTENT";

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
  }
}
