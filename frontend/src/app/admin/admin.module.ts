import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { BookListComponent } from './book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { UserDetailsComponent } from './user-list/user-details/user-details.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookEditComponent } from './book-list/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserListComponent,
    BookListComponent,
    UserDetailsComponent,
    UserEditComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [UserEditComponent]
})
export class AdminModule { }
