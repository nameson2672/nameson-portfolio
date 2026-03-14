import type { Paper } from '@/types'


interface PaperListItemProps {
  paper: Paper
  showNote?: boolean
}

export function PaperListItem({ paper, showNote = true }: PaperListItemProps) {
  return (
    <div
      className="py-4 hover:bg-card-bg transition-colors rounded-lg px-3 -mx-3"
      style={{ borderBottom: '1px solid rgba(28,28,26,0.10)' }}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-portfolio-accent cursor-pointer underline-offset-2 hover:underline"
            style={{ color: '#1C1C1A' }}
          >
            {paper.title}
          </a>
          <p className="text-xs mt-1" style={{ color: '#6B6860' }}>
            {paper.authors}
          </p>
          {showNote && paper.note && (
            <p className="text-xs italic mt-2 leading-relaxed" style={{ color: '#6B6860' }}>
              {paper.note}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border"
                style={{
                  borderColor: 'rgba(28,28,26,0.10)',
                  color: '#6B6860',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="shrink-0 text-xs whitespace-nowrap" style={{ color: '#9B9790' }}>
          {paper.organization}, {paper.year}
        </div>
      </div>
    </div>
  )
}
