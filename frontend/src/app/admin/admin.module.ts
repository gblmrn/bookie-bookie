import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { BookListComponent } from './book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    BookListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
