import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      firstName: this.fb.control(null, Validators.required),
      lastName: this.fb.control(null, Validators.required),
      username: this.fb.control(null, Validators.required),
      email: this.fb.control(null, Validators.required),
      isActive: this.fb.control(false, Validators.required),

      avatarUrl: this.fb.control(null, Validators.required),
      phone: this.fb.control(null, Validators.required),
      favoriteBooks: this.fb.control([]),
      purchasedBooks: this.fb.control([]),
      role: this.fb.control(null, Validators.required)
    });

    this.patchFormGroup();
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  private patchFormGroup(): void {
    this.userFormGroup.patchValue({
      ...this.data.user,
      updatedAt: new Date()
    });
  }

}
