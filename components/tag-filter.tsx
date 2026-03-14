'use client'

import { useState } from 'react'
import type { Post, Paper } from '@/types'
import { PostListItem } from './post-list-item'
import { PaperListItem } from './paper-list-item'

interface PostTagFilterProps {
  posts: Omit<Post, 'content'>[]
  allTags: string[]
}

export function PostTagFilter({ posts, allTags }: PostTagFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts

  const byYear: Record<string, Omit<Post, 'content'>[]> = {}
  for (const post of filtered) {
    const year = post.date.split('-')[0]
    if (!byYear[year]) byYear[year] = []
    byYear[year].push(post)
  }
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className="text-xs px-3 py-1 rounded-full transition-colors cursor-pointer select-none"
          style={
            activeTag === null
              ? { backgroundColor: '#C4622D', color: '#fff', border: '1px solid #C4622D' }
              : {
                  border: '1px solid rgba(28,28,26,0.10)',
                  color: '#6B6860',
                  backgroundColor: 'transparent',
                }
          }
          onMouseEnter={(e) => {
            if (activeTag !== null) {
              e.currentTarget.style.backgroundColor = '#EDE8DF'
            }
          }}
          onMouseLeave={(e) => {
            if (activeTag !== null) {
              e.currentTarget.style.backgroundColor = 'transparent'
            }
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className="text-xs px-3 py-1 rounded-full transition-colors cursor-pointer select-none"
            style={
              activeTag === tag
                ? { backgroundColor: '#C4622D', color: '#fff', border: '1px solid #C4622D' }
                : {
                    border: '1px solid rgba(28,28,26,0.10)',
                    color: '#6B6860',
                    backgroundColor: 'transparent',
                  }
            }
            onMouseEnter={(e) => {
              if (activeTag !== tag) {
                e.currentTarget.style.backgroundColor = '#EDE8DF'
              }
            }}
            onMouseLeave={(e) => {
              if (activeTag !== tag) {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      {years.map((year) => (
        <div key={year}>
          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: '#9B7B4D' }}
          >
            {year}
          </p>
          {byYear[year].map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      ))}
    </div>
  )
}

interface PaperTagFilterProps {
  papers: Paper[]
  allTags: string[]
}

export function PaperTagFilter({ papers, allTags }: PaperTagFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? papers.filter((p) => p.tags.includes(activeTag)) : papers

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className="text-xs px-3 py-1 rounded-full transition-colors cursor-pointer select-none"
          style={
            activeTag === null
              ? { backgroundColor: '#C4622D', color: '#fff', border: '1px solid #C4622D' }
              : {
                  border: '1px solid rgba(28,28,26,0.10)',
                  color: '#6B6860',
                  backgroundColor: 'transparent',
                }
          }
          onMouseEnter={(e) => {
            if (activeTag !== null) {
              e.currentTarget.style.backgroundColor = '#EDE8DF'
            }
          }}
          onMouseLeave={(e) => {
            if (activeTag !== null) {
              e.currentTarget.style.backgroundColor = 'transparent'
            }
          }}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className="text-xs px-3 py-1 rounded-full transition-colors cursor-pointer select-none"
            style={
              activeTag === tag
                ? { backgroundColor: '#C4622D', color: '#fff', border: '1px solid #C4622D' }
                : {
                    border: '1px solid rgba(28,28,26,0.10)',
                    color: '#6B6860',
                    backgroundColor: 'transparent',
                  }
            }
            onMouseEnter={(e) => {
              if (activeTag !== tag) {
                e.currentTarget.style.backgroundColor = '#EDE8DF'
              }
            }}
            onMouseLeave={(e) => {
              if (activeTag !== tag) {
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      {filtered.map((paper) => (
        <PaperListItem key={paper.id} paper={paper} />
      ))}
    </div>
  )
}
