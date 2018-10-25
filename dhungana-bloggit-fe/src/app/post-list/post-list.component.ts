import { Component } from '@angular/core';
import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
   selector: 'post-list',
   templateUrl: 'post-list.component.html',
   styleUrls: ['post-list.component.css']
})
export class PostListComponent {
   private posts: Post[];
   private error: HttpErrorResponse;
   private postService: PostService;
   
   constructor(postService: PostService) {
       this.postService = postService;
       postService.getAllPosts().subscribe(
       	   posts => {this.posts = posts},
           error => {this.error = error}
       );
   }
   
   handlePostDeleted(post: Post) {
   		this.postService.deletePost(post.postId).subscribe(
           (post) => this.deletePostFromList(post.postId),
           (error) => this.error = error

        );
   }
   
   deletePostFromList(postId: number) {
       const index: number = this.posts.findIndex((post) => post.postId === postId);
       this.posts.splice(index, 1);
   }
}
