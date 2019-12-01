import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CreatePostComponent } from "./posts/create-post/create-post.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, CreatePostComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
