import {
    Component,
    Input,
    Output,
    EventEmitter
 } from '@angular/core';
 import { Post } from '../post-service/post';
 import { Router } from '@angular/router';
 
 @Component({
    selector: 'post-card',
    templateUrl: 'post-card.component.html',
    styleUrls: ['post-card.component.css']
 })
 export class PostCardComponent {
     @Input()
     private post: Post;
     
     @Output()
     private postDeleted: EventEmitter<Post>;
     
     constructor() {
        this.postDeleted = new EventEmitter<Post>();
     }
     
     updateTitle() {
        this.post.title += new Date();
     }
     
     deletePost() {
        this.postDeleted.emit(this.post);
     }
 }
 