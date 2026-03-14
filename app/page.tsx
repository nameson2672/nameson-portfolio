import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getBooks, getPapers } from '@/lib/content'
import { PostListItem } from '@/components/post-list-item'
import { PaperListItem } from '@/components/paper-list-item'
import { NewsletterCta } from '@/components/newsletter-cta'

export const dynamic = 'force-static'

const projects = [
  {
    title: 'Legal Assistance AI',
    description: 'AI-driven legal guidance tool built with FastAPI, LangChain, and LLaMA3.',
    tags: ['Python', 'LangChain', 'FastAPI'],
    url: null,
  },
  {
    title: 'GitOps Pipeline — Three-Tier Architecture',
    description:
      'Kubernetes GitOps pipeline using Jenkins, ArgoCD, and Docker with automated rollbacks.',
    tags: ['Kubernetes', 'ArgoCD', 'Jenkins'],
    url: null,
  },
  {
    title: 'Rich Text Editor for React',
    description:
      'Mobile-friendly editor built on Draft.js with image uploads, formatting, and live previews.',
    tags: ['React', 'TypeScript', 'Draft.js'],
    url: null,
  },
]

export default async function HomePage() {
  const [posts, papers] = await Promise.all([getAllPosts(), Promise.resolve(getPapers())])
  const books = getBooks()
  const recentPosts = posts.slice(0, 4)
  const recentPapers = papers.slice(0, 3)
  const readingBooks = books.filter((b) => b.status === 'reading')

  return (
    <div className="max-w-160 mx-auto px-6">
      {/* Hero */}
      <section className="pt-16 pb-12">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#9B7B4D' }}>
          Software Engineer · Cloud · .NET · TypeScript
        </p>
        <h1 className="text-4xl font-medium leading-tight mb-6" style={{ color: '#1C1C1A' }}>
          Hey, I&apos;m Nameson —<br />
          I build scalable systems and ship them to the cloud.
        </h1>
        <p className="leading-relaxed" style={{ color: '#6B6860' }}>
          I&apos;m a software engineer focused on cloud-native development on AWS, backend systems
          with .NET Core, and full-stack work with TypeScript and React. I hold AWS and CKA
          certifications, and I care deeply about system architecture, performance, and clean APIs.
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
            href="https://linkedin.com"
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
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href="https://github.com/nameson2672"
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
