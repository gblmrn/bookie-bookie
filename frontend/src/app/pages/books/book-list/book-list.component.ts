import { Component, OnInit, ViewChild } from '@angular/core';

import { BOOKS } from './../../../shared/mocks/books';
import { Book } from '../../../shared/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Book[] = BOOKS;
  public searchText: string = '';
  @ViewChild('searchTextRef', { static: false }) public searchTextRef: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(search: string): void {
    console.log(search)
  }

  onClearSearch(): void {
    this.searchText = '';
    if (this.searchTextRef) {
      this.searchTextRef?.nativeElement.focus();
    }
  }

}
