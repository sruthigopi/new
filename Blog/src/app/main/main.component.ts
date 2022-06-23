import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
image:string='https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_960_720.png';
imageWidth:number=100;
imageMargin:number=15;
  constructor() { }

  ngOnInit(): void {
  }
  count:number=120;
  addNum(){
  this.count++;
  }
}
