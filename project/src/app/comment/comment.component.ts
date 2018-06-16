import { Comment } from './../models/comment.model';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  URL_IMG: string = "http://localhost:3000/uploads/";

  @Input() comment : Comment;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  safeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  urlImg(){
    return this.URL_IMG+this.comment.user.avatar;
  }

}
