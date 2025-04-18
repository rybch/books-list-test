import { Component, Inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Book } from '../../core/models/book.model'
import { BookFormType } from '../../core/models/book-form.type'
import { BooksService } from '../../core/services/books-service/books.service'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatIconModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent {
  form: FormGroup<BookFormType>

  constructor(
    private booksService: BooksService,
    private dialogRef: MatDialogRef<BookFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: { book: Book },
  ) {
    this.form = new FormGroup<BookFormType>({
      id: new FormControl(data?.book.id ?? '', { nonNullable: true }),
      title: new FormControl(data?.book.title ?? '', { nonNullable: true, validators: [Validators.required] }),
      author: new FormControl(data?.book.author ?? '', { nonNullable: true, validators: [Validators.required] }),
      year: new FormControl(data?.book.year ?? null, { validators: [Validators.required, Validators.min(0)] }),
      description: new FormControl(data?.book.description ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      coverUrl: new FormControl(data?.book.coverUrl ?? '', { nonNullable: true }),
    })
  }

  save() {
    if (this.form.valid) {
      const book: Book = { ...this.data?.book, ...this.form.getRawValue() }
      if (this.data?.book) {
        this.booksService.updateBook(book)
      } else {
        this.booksService.addBook(book)
      }
      this.dialogRef.close()
    } else {
      this.form.markAllAsTouched()
    }
  }
}
