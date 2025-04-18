import { Component, Inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog'
import { Book } from '../../core/models/book.model'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: Book }) {}
}
