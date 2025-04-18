import { AsyncPipe } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInput } from '@angular/material/input'
import { MatTooltipModule } from '@angular/material/tooltip'
import { Book } from '../../core/models/book.model'
import { BooksService } from '../../core/services/books-service/books.service'
import { FilterBySearchPipe } from '../../shared/filter-by-search.pipe'
import { BookDetailsComponent } from '../book-details/book-details.component'
import { BookFormComponent } from '../book-form/book-form.component'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatButtonModule,
    AsyncPipe,
    MatIconModule,
    MatTooltipModule,
    FilterBySearchPipe,
    FormsModule,
    MatInput,
    MatFormFieldModule,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books$ = this.bookService.books$
  searchParam = ''

  constructor(
    private bookService: BooksService,
    private dialog: MatDialog,
  ) {}

  openDetails(book: Book) {
    this.dialog
      .open(BookDetailsComponent, { data: { book }, minWidth: '500px' })
      .afterClosed()
      .subscribe((res) => {
        if (res == 'edit') {
          this.edit(book)
        } else if (res == 'delete') {
          this.delete(book.id)
        }
      })
  }

  add() {
    this.dialog.open(BookFormComponent, { minWidth: '500px' })
  }

  delete(id: string | undefined) {
    this.bookService.deleteBook(id as string)
  }

  edit(book: Book) {
    this.dialog.open(BookFormComponent, { data: { book }, minWidth: '500px' })
  }
}
