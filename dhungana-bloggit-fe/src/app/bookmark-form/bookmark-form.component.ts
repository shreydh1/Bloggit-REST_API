import { Component } from '@angular/core';
import { Bookmark } from '../bookmark-service/bookmark';
import { BookmarkService } from '../bookmark-service/bookmark.service';
import { HttpErrorResponse } from '@angular/common/http';
import { 
   Router,
   ActivatedRoute
} from '@angular/router';

@Component({
   selector: 'bookmark-form',
   templateUrl: 'bookmark-form.component.html',
   styleUrls: ['bookmark-form.component.css']
})
export class BookmarkFormComponent {
	private bookmarkId: number;
	private bookmark: Bookmark;
	private bookmarkService: BookmarkService;
	private error: HttpErrorResponse;
	private router: Router;

	constructor(route: ActivatedRoute, router: Router, bookmarkService: BookmarkService) {
            this.router = router;
	    this.bookmark = new Bookmark();
            this.bookmarkService = bookmarkService;
            route.params.subscribe(params => this.bookmarkId = params['bookmarkId']);
            
            if (this.bookmarkId) {
                bookmarkService.getBookmarkById(this.bookmarkId).subscribe(
                    (bookmark) => this.bookmark = bookmark,
                    (error) => this.error = error
                );
            }
            else {
                this.bookmark = new Bookmark();
            }
	}

        submitBookmark() {
	    if(this.bookmarkId){
               this.bookmarkService.updateBookmark(this.bookmarkId, this.bookmark).subscribe(
                   (bookmark) => this.router.navigate(['bookmarks', this.bookmarkId]),
                   (error) => this.error = error
               );
            }
            else{
               this.bookmarkService.createBookmark(this.bookmark).subscribe(
		   (bookmark) => this.router.navigate(['bookmarks']),
		   (error) => this.error = error              
	        );
            }
        }
}
