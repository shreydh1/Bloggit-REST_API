import {
    Component,
    Input,
    Output,
    EventEmitter
 } from '@angular/core';
 import { Bookmark } from '../bookmark-service/bookmark';
 import { Router } from '@angular/router';
 
 @Component({
    selector: 'bookmark-card',
    templateUrl: 'bookmark-card.component.html',
    styleUrls: ['bookmark-card.component.css']
 })
 export class BookmarkCardComponent {
 
     @Input()
     private bookmark: Bookmark;
     
     @Output()
     private bookmarkDeleted: EventEmitter<Bookmark>;
 
     
     private router: Router;
 
     constructor() {
        this.bookmarkDeleted = new EventEmitter<Bookmark>();
     }
    
     updateTitle() {
        this.bookmark.title += new Date();
     }
     
     deleteBookmark() {
        this.bookmarkDeleted.emit(this.bookmark);
     }
 }
 