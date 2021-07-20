import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BookDetailsComponent } from './../pages/books/book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/:id',
        component: BookDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'auth/login'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutes { }
