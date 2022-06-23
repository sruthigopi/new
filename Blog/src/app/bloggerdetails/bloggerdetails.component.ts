import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogModel } from './blog.model';

@Component({
  selector: 'app-bloggerdetails',
  templateUrl: './bloggerdetails.component.html',
  styleUrls: ['./bloggerdetails.component.css']
})
export class BloggerdetailsComponent implements OnInit {
title:string=' Most Expensive Flowers in The World';
date:string='07/06/2022';
blog:BlogModel[]=[];
imageWidth:number=350;
imageMargin:number=20;



  constructor(private blogService:BlogService) { }
 
  ngOnInit(): void {
    this.blogService.getData().subscribe((data)=>{
      this.blog=JSON.parse(JSON.stringify(data));
    })
  }

}
