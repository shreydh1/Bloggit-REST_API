import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

    private http: HttpClient;
    private url: string = 'http://localhost:8080/api/v1/post';
    constructor(http: HttpClient) {
       this.http = http;
    }
    
    getAllPosts(): Observable<Post[]> {
       return this.http.get<Post[]>(this.url);
    }

    getPostById(postId: number): Observable<Post> {
       return this.http.get<Post>(`${this.url}/${postId}`);
    }

    createPost(post: Post): Observable<Post> {
       return this.http.post<Post>(`${this.url}/`, post);
    }
    
    updatePost(postId: number, post: Post): Observable<Post> {
       return this.http.put<Post>(`${this.url}/${postId}`, post);
    }
    
    deletePost(postId: number): Observable<Post> {
       return this.http.delete<Post>(`${this.url}/${postId}`);
    }
}
