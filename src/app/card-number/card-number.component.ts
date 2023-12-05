import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.css']
})
export class CardNumberComponent implements OnInit {

  @Input()
  number?: number = 0;
  @Input()
  description?: string = '';
  @Input()
  title?: string = '';
  image_txt: any;
  constructor() { }

  ngOnInit(): void {
  }

}
