import Link from 'next/link'
import type { Post } from '@/types'

interface PostListItemProps {
  post: Omit<Post, 'content'>
  showExcerpt?: boolean
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function PostListItem({ post, showExcerpt = true }: PostListItemProps) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="block group py-4 cursor-pointer"
      style={{ borderBottom: '1px solid rgba(28,28,26,0.10)' }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3
            className="text-sm font-medium transition-colors group-hover:text-[#C4622D]"
            style={{ color: '#1C1C1A' }}
          >
            {post.title}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-portfolio-accent text-sm ml-1">→</span>
          </h3>
          {showExcerpt && (
            <p className="text-sm mt-1 leading-relaxed" style={{ color: '#6B6860' }}>
              {post.excerpt}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="text-xs whitespace-nowrap" style={{ color: '#9B9790' }}>
            {formatDate(post.date)}
          </span>
          {post.tags[0] && (
            <span
              className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{
                border: '1px solid rgba(28,28,26,0.10)',
                color: '#6B6860',
              }}
            >
              {post.tags[0]}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
