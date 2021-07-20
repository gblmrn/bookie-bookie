import { BookDetailsComponent } from './book-details/book-details.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { BooksRoutes } from './books.routes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent,
    BookDetailsComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutes,
    SharedModule,
    FormsModule
  ]
})
export class BooksModule { }
