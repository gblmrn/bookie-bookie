import { BookDetailsComponent } from './book-details/book-details.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksComponent } from './books.component';
import { BooksRoutes } from './books.routes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutes
  ]
})
export class BooksModule { }
