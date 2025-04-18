import { FormControl } from '@angular/forms'

export interface BookFormType {
  id: FormControl<string | undefined>
  title: FormControl<string>
  author: FormControl<string>
  year: FormControl<number | null>
  description: FormControl<string>
  coverUrl: FormControl<string>
}
