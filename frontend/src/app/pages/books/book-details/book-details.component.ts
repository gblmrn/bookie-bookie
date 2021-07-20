import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BOOKS } from './../../../shared/mocks/books';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public bookId: string | undefined;
  public book: Book | undefined;
  public isFavorite = false;

  constructor(private route: ActivatedRoute) { 
    this.book = BOOKS.find(book => book.id === this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
  }

}
