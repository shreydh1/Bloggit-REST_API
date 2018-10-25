import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'bookmark-details',
	templateUrl: './bookmark-details.component.html',
	styleUrls: ['./bookmark-details.component.css']
})

export class BookmarkDetailsComponent {
	private bookmarkId: number;
	private bookmarks: object[];
	private bookmark: object;
	constructor(route: ActivatedRoute){
		route.params.subscribe(params => this.bookmarkId = params['bookmarkId']);
		this.bookmarks = [
            {
				"bookmarkId": 1,
				"title": "Reddit",
				"url": "reddit.com",
				"isVisible": 1,
				"priority": 4,
				"createdBy": "Paresh Rawal",
				"createdOn": 1517551200000,
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 2,
				"title": "Intro to Artificial Intelligence",
				"url": "nil.cs.uno.edu",
				"isVisible": 1,
				"priority": 7,
				"createdBy": "Stephen Ware",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 3,
				"title": "Book on Math",
				"url": "mathblog.com",
				"isVisible": 1,
				"priority": 8,
				"createdBy": "Mathy Guy",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 4,
				"title": "Spring",
				"url": "spring.io",
				"isVisible": 1,
				"priority": 9,
				"createdBy": "Mr King",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 5,
				"title": "Let us C",
				"url": "codewars.com",
				"isVisible": 0,
				"priority": 3,
				"createdBy": "Manish",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 6,
				"title": "Videos",
				"url": "youtube.com",
				"isVisible": 0,
				"priority": 2,
				"createdBy": "Johny Cash",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			{
				"bookmarkId": 7,
				"title": "wwe",
				"url": "wwe.com",
				"isVisible": 1,
				"priority": 6,
				"createdBy": "John Cena",
				"createdOn": 1517551200000, 
				"lastUpdated": 1517724000000
			},
			
        ];	
        this.bookmark = this.bookmarks
                        .filter(bookmark => bookmark['bookmarkId'] == this.bookmarkId)[0];	
	}
}
