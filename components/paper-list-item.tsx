import type { Paper } from '@/types'

const tagColors: Record<string, string> = {
  systems: 'background-color:#EFF6FF;color:#1D4ED8',
  storage: 'background-color:#F5F3FF;color:#6D28D9',
  consensus: 'background-color:#FFF7ED;color:#92400E',
  distributed: 'background-color:#ECFDF5;color:#065F46',
}

interface PaperListItemProps {
  paper: Paper
  showNote?: boolean
}

export function PaperListItem({ paper, showNote = true }: PaperListItemProps) {
  return (
    <div className="py-4" style={{ borderBottom: '1px solid rgba(28,28,26,0.10)' }}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <a
            href={paper.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-[#C4622D]"
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
            {paper.tags.map((tag) => {
              const colorStyle = tagColors[tag] || 'background-color:#EDE8DF;color:#9B7B4D'
              const [bg, fg] = colorStyle.split(';')
              return (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: bg.replace('background-color:', ''),
                    color: fg.replace('color:', ''),
                  }}
                >
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
        <div className="flex-shrink-0 text-xs whitespace-nowrap" style={{ color: '#9B9790' }}>
          {paper.organization}, {paper.year}
        </div>
      </div>
    </div>
  )
}
