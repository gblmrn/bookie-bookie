import { Component, Input, OnInit } from '@angular/core';

import { Book } from './../../../shared/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() public book: Book | undefined;
  public isFavorite = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
