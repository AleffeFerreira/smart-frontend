import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  color ?: string = '';
  @Input()
  image_txt ?: string = '';
  @Input()
  image ?: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
