export const createId = () => {
  return 'id' + Math.random().toString(16).slice(2)
}

export const MOCK_BOOKS = [
  {
    id: createId(),
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    description: 'Dystopian novel.',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyuK4YKu0DKWm0lnWcYCmNtl-bQP9JlzMMng&s',
  },
  {
    id: createId(),
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    description: 'Science fiction novel.',
    coverUrl: 'https://static.yakaboo.ua/media/catalog/product/9/7/9780099477464.jpg',
  },
  {
    id: createId(),
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    description: 'Classic American novel.',
  },
  {
    id: createId(),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    description: 'Novel about racial injustice.',
  },
  {
    id: createId(),
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    description: 'Adventure at sea.',
  },
]
