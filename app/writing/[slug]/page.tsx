import Link from 'next/link'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <div className="max-w-[640px] mx-auto px-6 pt-10 pb-16">
      <Link
        href="/writing"
        className="text-sm transition-colors inline-block mb-8"
        style={{ color: '#6B6860' }}
      >
        ← Writing
      </Link>

      <header className="mb-8">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{ border: '1px solid rgba(28,28,26,0.10)', color: '#6B6860' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-medium mb-2" style={{ color: '#1C1C1A' }}>
          {post.title}
        </h1>
        <p className="text-sm" style={{ color: '#9B9790' }}>
          {formatDate(post.date)}
        </p>
      </header>

      <div className="mb-8" style={{ borderTop: '1px solid rgba(28,28,26,0.10)' }} />

      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  )
}
