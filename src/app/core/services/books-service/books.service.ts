import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Book } from '../../models/book.model'
import { createId, MOCK_BOOKS } from './mocks'

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private booksSubject = new BehaviorSubject<Book[]>(MOCK_BOOKS)
  books$ = this.booksSubject.asObservable()

  get books() {
    return this.booksSubject.value
  }

  addBook(book: Book) {
    const value = [...this.books, { ...book, id: createId() }]
    this.booksSubject.next(value)
  }

  updateBook(updatedBook: Book) {
    const value = this.books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    this.booksSubject.next(value)
  }

  deleteBook(id: string) {
    const value = this.books.filter((book) => book.id !== id)
    this.booksSubject.next(value)
  }
}
