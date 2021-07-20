import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { USERS } from './../../../shared/mocks/users';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public user: User | undefined;
  
  constructor(private route: ActivatedRoute) {
    this.user = USERS.find(user => user.id === this.route.snapshot.params['id'])
   }

  ngOnInit(): void {
  }

}
