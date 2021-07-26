import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, Category } from './../../../shared/models/book';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  public bookFormGroup: FormGroup;
  public categories: string[] = Object.keys(Category);

  constructor(
    public dialogRef: MatDialogRef<BookEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    private fb: FormBuilder) {
    this.bookFormGroup = this.fb.group({
      title: this.fb.control(null, Validators.required),
      author: this.fb.control(null, Validators.required),
      coverImage: this.fb.control(null, Validators.required),
      price: this.fb.control(null, Validators.required),

      specialPrice: this.fb.control(null, Validators.required),
      tags: this.fb.control(null, Validators.required),
      category: this.fb.control(null),
    });

    this.patchFormGroup();
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  private patchFormGroup(): void {
    this.bookFormGroup.patchValue({
      ...this.data.book,
      updatedAt: new Date()
    });
  }

}