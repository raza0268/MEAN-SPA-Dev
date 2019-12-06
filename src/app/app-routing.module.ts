import { CreatePostComponent } from "./posts/create-post/create-post.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Route } from "@angular/compiler/src/core";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
