import { Component, OnInit } from '@angular/core';

import { BOOKS } from './../../../shared/mocks/books';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Book[] = BOOKS;

  constructor() { }

  ngOnInit(): void {
  }

}
