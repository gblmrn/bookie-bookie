import { Component, OnInit, ViewChild } from '@angular/core';

import { AdminService } from './../admin.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookPeGenunchi } from './../../shared/models/book-pe-genunchi';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: BookPeGenunchi[] = [];
  public searchText: string = '';
  @ViewChild('searchTextRef', { static: false }) public searchTextRef: any | undefined;

  constructor(private service: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe( (response: BookPeGenunchi[]) => {
      this.books = response;
    });
  }

  onSearch(search: string): void {
    console.log(search)
  }

  editBook(book: BookPeGenunchi) {
    const dialogRef = this.dialog.open(BookEditComponent, {
      data: {book}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onClearSearch(): void {
    this.searchText = '';

    if (this.searchTextRef) {
      this.searchTextRef?.nativeElement.focus();
    }
  }


}
