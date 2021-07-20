import { Component, OnInit, ViewChild } from '@angular/core';

import { USERS } from './../../shared/mocks/users';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: User[] = USERS;
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
