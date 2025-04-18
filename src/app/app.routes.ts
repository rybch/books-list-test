import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/book-list/book-list.component').then((m) => m.BookListComponent),
  },
]
