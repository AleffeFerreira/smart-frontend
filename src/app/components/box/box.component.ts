import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
color: any;
image_txt: any;
image: any;

  constructor() { }

  ngOnInit(): void {
  }

}
