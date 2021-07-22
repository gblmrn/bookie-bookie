import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { USERS } from './../../shared/mocks/users';
import { User } from '../../shared/models/user';
import { UserEditComponent } from './user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: User[] = USERS;
  public searchText: string = '';
  @ViewChild('searchTextRef', { static: false }) public searchTextRef: any | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editUser(user: User) {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: {user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
