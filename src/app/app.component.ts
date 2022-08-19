import { Component, VERSION } from '@angular/core';
import { Items, PostsService } from './posts.service';
import { MatRadioModule } from '@angular/material/radio';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private PostsService: PostsService){ }
}
