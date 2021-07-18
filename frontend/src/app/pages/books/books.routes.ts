import { RouterModule, Routes } from '@angular/router';

import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
 {
    path: '',
    component: BooksComponent,
    children: [
        {
            path: ':id',
            component: BookDetailsComponent
        },
    ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutes { }
