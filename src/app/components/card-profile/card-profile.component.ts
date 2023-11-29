import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {
  @Input()
  description?:string =''
  @Input()
  userProfile?:string =''
  @Input()
  userName?:string =''
  @Input()
  userImg?:string =''
  constructor() { }

  ngOnInit(): void {
  }

}
