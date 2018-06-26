import { CommentService } from './../services/comment.service';
import { LoginService } from './../services/login.service';
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
  deuLike: boolean = false;

  @Input() comment : Comment;
  constructor(private sanitizer: DomSanitizer, protected loginService: LoginService, private commentService: CommentService) { }

  ngOnInit() {
    this.deuLike = this.liked();
  }

  safeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  urlImg(){
    return this.URL_IMG+this.comment.user.avatar;
  }

  liked(){
    if(!this.loginService.user){
      return false;
    }
    for(let i=0; i<this.comment.likes.length; i++){
      if(this.comment.likes[i]==this.loginService.user._id){
        return true;
      }
    }
    return false;
  }

  like(e){
    e.preventDefault();
    this.commentService.likeComment(this.comment, this.loginService.user)
                .subscribe(data => {
                  this.comment = data;
                  this.deuLike = this.liked();
                  console.log(this.deuLike);
                },
                  error => {
                  console.log(error);
                });
  }

  remove(e){
    e.preventDefault();
    this.commentService.removeComment(this.comment, this.loginService.user)
                .subscribe(data => {
                  console.log(data);
                },
                  error => {
                  console.log(error);
                });
  }

}
