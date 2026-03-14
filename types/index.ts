export type BookStatus = 'reading' | 'finished' | 'queued'

export interface Book {
  id: string
  title: string
  author: string
  status: BookStatus
  rating: number | null
  color: string
  note: string | null
  finishedDate: string | null
}

export interface Paper {
  id: string
  title: string
  authors: string
  organization: string
  year: number
  tags: string[]
  note: string
  url: string
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}
