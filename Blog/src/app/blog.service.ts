import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get("http://localhost:3000/blogdata");
  }
  getComment(){
    return this. http.get("http://localhost:3000/comments")
  }
}
