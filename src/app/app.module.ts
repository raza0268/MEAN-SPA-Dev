import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CreatePostComponent } from "./posts/create-post/create-post.component";

@NgModule({
  declarations: [AppComponent, CreatePostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
