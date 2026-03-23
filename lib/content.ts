import type { Book, BookStatus, Paper, Project } from '@/types'
import data from '@/data/content.json'
import projectsData from '@/data/projects.json'

export function getBooks(): Book[] {
  return data.books as Book[]
}

export function getPapers(): Paper[] {
  return (data.papers as Paper[]).sort((a, b) => b.year - a.year)
}

export function getBooksByStatus(status: BookStatus): Book[] {
  return getBooks().filter((book) => book.status === status)
}

export function getProjects(): Project[] {
  return projectsData.projects as Project[]
}

export function getFavoriteProjects(): Project[] {
  return getProjects().filter((p) => p.favorite)
}
