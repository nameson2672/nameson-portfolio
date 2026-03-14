import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Post } from '@/types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export async function getAllPosts(): Promise<Omit<Post, 'content'>[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return {
        slug: (data.slug as string) || slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) || [],
      }
    })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileNames = fs.readdirSync(postsDirectory)
  const fileName = fileNames.find((name) => {
    const fullPath = path.join(postsDirectory, name)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return (data.slug || name.replace(/\.md$/, '')) === slug
  })

  if (!fileName) {
    throw new Error(`Post not found: ${slug}`)
  }

  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug: (data.slug as string) || fileName.replace(/\.md$/, ''),
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) || [],
    content: contentHtml,
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      return (data.slug as string) || fileName.replace(/\.md$/, '')
    })
}
