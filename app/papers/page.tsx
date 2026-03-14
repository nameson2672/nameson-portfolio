import { getPapers } from '@/lib/content'
import { PaperTagFilter } from '@/components/tag-filter'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Papers',
  description: "Foundational computer science papers I've read and annotated.",
}

export default function PapersPage() {
  const papers = getPapers()
  const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort()

  return (
    <div className="max-w-[640px] mx-auto px-6 pt-12 pb-16">
      <h1 className="text-3xl font-medium mb-3" style={{ color: '#1C1C1A' }}>
        Papers
      </h1>
      <p className="mb-10" style={{ color: '#6B6860' }}>
        Foundational papers in distributed systems, databases, and computer science that I&apos;ve
        read and found worth annotating.
      </p>
      <PaperTagFilter papers={papers} allTags={allTags} />
    </div>
  )
}
