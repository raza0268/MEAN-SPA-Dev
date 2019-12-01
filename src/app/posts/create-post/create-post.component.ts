import { Post } from "./../post.model";
import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-create",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"]
})
export class CreatePostComponent {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }
}
