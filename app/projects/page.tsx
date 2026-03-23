import type { Metadata } from 'next'
import { Star } from 'lucide-react'
import { getProjects } from '@/lib/content'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Projects — Nameson Gaudel',
  description:
    'A collection of projects I have built across cloud infrastructure, backend systems, and full-stack development.',
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="max-w-160 mx-auto px-6">
      <section className="pt-16 pb-10">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#9B7B4D' }}>
          Work
        </p>
        <h1 className="text-4xl font-medium leading-tight mb-4" style={{ color: '#1C1C1A' }}>
          Projects
        </h1>
        <p className="leading-relaxed" style={{ color: '#6B6860' }}>
          Things I have built — spanning cloud-native infrastructure, backend APIs, developer
          tooling, and full-stack applications. Favorites are marked below.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-16">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url ?? 'https://github.com/nameson2672'}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl p-4 transition-opacity hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#EDE8DF' }}
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h2 className="font-medium leading-snug" style={{ color: '#1C1C1A' }}>
                {project.title}
              </h2>
              {project.favorite && (
                <Star
                  size={14}
                  className="shrink-0 mt-0.5"
                  style={{ color: '#C4622D', fill: '#C4622D' }}
                  aria-label="Favorite project"
                />
              )}
            </div>
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
    </div>
  )
}
