import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getBooks, getPapers, getFavoriteProjects } from '@/lib/content'
import { PostListItem } from '@/components/post-list-item'
import { PaperListItem } from '@/components/paper-list-item'
import { NewsletterCta } from '@/components/newsletter-cta'

export const dynamic = 'force-static'

export default async function HomePage() {
  const [posts, papers] = await Promise.all([getAllPosts(), Promise.resolve(getPapers())])
  const books = getBooks()
  const favoriteProjects = getFavoriteProjects()
  const recentPosts = posts.slice(0, 4)
  const recentPapers = papers.slice(0, 3)
  const readingBooks = books.filter((b) => b.status === 'reading')

  return (
    <div className="max-w-160 mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-12">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#9B7B4D' }}>
          Software Engineer · Cloud · DevOps
        </p>
        <h1 className="text-4xl font-medium leading-tight mb-6" style={{ color: '#1C1C1A' }}>
          Hey, I&apos;m Nameson Gaudel<br />
          backend, cloud, and systems. always building.
        </h1>
        <p className="leading-relaxed mb-4" style={{ color: '#6B6860' }}>
          I&apos;m a software engineer focused on backend systems, cloud infrastructure, and making
          things actually run in production.
        </p>
        <p className="leading-relaxed mb-4" style={{ color: '#6B6860' }}>
          Right now, I work mostly with AWS, .NET, and modern TypeScript/React stacks—building
          systems end-to-end, from APIs to deployment. I&apos;m AWS Certified and CKA certified,
          and I care a lot about reliability, performance, and clean system design.
        </p>
        <p className="leading-relaxed" style={{ color: '#6B6860' }}>
          Lately, I&apos;ve been exploring observability, distributed systems, and how to design
          production-grade architectures that don&apos;t break under real-world load.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <a
            href="https://github.com/nameson2672"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-full transition-colors"
            style={{ border: '1px solid rgba(28,28,26,0.10)', color: '#6B6860' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nameson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded-full transition-colors"
            style={{ border: '1px solid rgba(28,28,26,0.10)', color: '#6B6860' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:namesongaudel@gmail.com"
            className="text-xs px-3 py-1.5 rounded-full transition-colors"
            style={{ border: '1px solid rgba(28,28,26,0.10)', color: '#6B6860' }}
          >
            Email
          </a>
        </div>
      </section>

      {/* Recent Writing */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: '#9B7B4D' }}>
            Recent writing
          </p>
          <Link
            href="/writing"
            className="text-sm transition-colors hover:underline underline-offset-2"
            style={{ color: '#C4622D' }}
          >
            All posts →
          </Link>
        </div>
        {recentPosts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </section>

      <div className="my-10" style={{ borderTop: '1px solid rgba(28,28,26,0.10)' }} />

      {/* Projects */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: '#9B7B4D' }}>
            Projects
          </p>
          <Link
            href="/projects"
            className="text-sm transition-colors hover:underline underline-offset-2"
            style={{ color: '#C4622D' }}
          >
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteProjects.map((project) => (
            <a
              key={project.id}
              href={project.url ?? 'https://github.com/nameson2672'}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-4 transition-colors hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: '#EDE8DF' }}
            >
              <h3 className="font-medium" style={{ color: '#1C1C1A' }}>
                {project.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: '#6B6860' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full border"
                    style={{ borderColor: 'rgba(28,28,26,0.10)', color: '#6B6860' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="my-10" style={{ borderTop: '1px solid rgba(28,28,26,0.10)' }} />

      {/* Currently Reading */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: '#9B7B4D' }}>
            Currently reading
          </p>
          <Link
            href="/bookshelf"
            className="text-sm transition-colors hover:underline underline-offset-2"
            style={{ color: '#C4622D' }}
          >
            Full bookshelf →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {readingBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-xl p-4 flex gap-3"
              style={{
                backgroundColor: '#EDE8DF',
                borderLeft: `4px solid ${book.color}`,
              }}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium leading-snug" style={{ color: '#1C1C1A' }}>
                  {book.title}
                </h3>
                <p className="text-xs mt-1" style={{ color: '#6B6860' }}>
                  {book.author}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: '#C4622D' }}
                  />
                  <span className="text-xs" style={{ color: '#9B9790' }}>
                    In progress
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-10" style={{ borderTop: '1px solid rgba(28,28,26,0.10)' }} />

      {/* Recent Papers */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs tracking-widest uppercase" style={{ color: '#9B7B4D' }}>
            Recent papers read
          </p>
          <Link
            href="/papers"
            className="text-sm transition-colors hover:underline underline-offset-2"
            style={{ color: '#C4622D' }}
          >
            All papers →
          </Link>
        </div>
        {recentPapers.map((paper) => (
          <PaperListItem key={paper.id} paper={paper} showNote={false} />
        ))}
      </section>

      {/* Newsletter */}
      <NewsletterCta />

      <div className="pb-16" />
    </div>
  )
}
