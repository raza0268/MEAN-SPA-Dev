import { Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent {
  title = "mean-spa";
  enteredValue = "";
  newPost = "NO CONTENT";

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
