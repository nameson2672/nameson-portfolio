import { getAllPosts } from '@/lib/posts'
import { PostTagFilter } from '@/components/tag-filter'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Writing',
  description: 'Essays and notes on distributed systems, engineering craft, and more.',
}

export default async function WritingPage() {
  const posts = await getAllPosts()
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort()

  return (
    <div className="max-w-[640px] mx-auto px-6 pt-12">
      <h1 className="text-3xl font-medium mb-3" style={{ color: '#1C1C1A' }}>
        Writing
      </h1>
      <p className="mb-10" style={{ color: '#6B6860' }}>
        Essays and notes on distributed systems, engineering craft, and the occasional book note.
      </p>
      <PostTagFilter posts={posts} allTags={allTags} />
    </div>
  )
}
