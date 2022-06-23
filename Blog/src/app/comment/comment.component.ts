import { Component, OnInit } from '@angular/core';
import { BlogModel } from '../bloggerdetails/blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  blog:BlogModel[]=[];
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getData().subscribe((data)=>{
      this.blog=JSON.parse(JSON.stringify(data));
    })
  }

}
