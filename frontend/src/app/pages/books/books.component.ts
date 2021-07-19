import { Component, OnInit } from '@angular/core';

import { BOOKS } from './../../shared/mocks/books';
import { Book } from '../../shared/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Book[] = BOOKS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
