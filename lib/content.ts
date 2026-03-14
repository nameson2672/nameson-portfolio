import type { Book, BookStatus, Paper } from '@/types'
import data from '@/data/content.json'

export function getBooks(): Book[] {
  return data.books as Book[]
}

export function getPapers(): Paper[] {
  return (data.papers as Paper[]).sort((a, b) => b.year - a.year)
}

export function getBooksByStatus(status: BookStatus): Book[] {
  return getBooks().filter((book) => book.status === status)
}
