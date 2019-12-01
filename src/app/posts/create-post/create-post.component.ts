import { Post } from "./../post.model";
import { PostService } from "./../posts.service";
import { Component, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent {
  enteredTitle = "";
  enteredContent = "";

  constructor(public postService: PostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPosts(form.value.title, form.value.content);
  }
}
