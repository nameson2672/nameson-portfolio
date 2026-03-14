import type { Book } from '@/types'

const statusDotColors: Record<string, string> = {
  reading: '#C4622D',
  finished: '#22C55E',
  queued: '#9CA3AF',
}

const statusLabels: Record<string, string> = {
  reading: 'In progress',
  finished: 'Finished',
  queued: 'Want to read',
}

interface BookItemProps {
  book: Book
}

export function BookItem({ book }: BookItemProps) {
  return (
    <div
      className="flex gap-4 py-4"
      style={{ borderBottom: '1px solid rgba(28,28,26,0.10)' }}
    >
      <div
        className="w-10 h-14 rounded flex-shrink-0"
        style={{ backgroundColor: book.color }}
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-medium leading-snug" style={{ color: '#1C1C1A' }}>
            {book.title}
          </h3>
          {book.status === 'finished' && book.rating !== null && (
            <div className="flex gap-0.5 flex-shrink-0">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{ color: star <= book.rating! ? '#C4622D' : 'rgba(28,28,26,0.10)' }}
                >
                  ★
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs mt-0.5" style={{ color: '#6B6860' }}>
          {book.author}
        </p>
        {book.status !== 'queued' && book.note && (
          <p className="text-xs italic mt-2 leading-relaxed" style={{ color: '#6B6860' }}>
            {book.note}
          </p>
        )}
        <div className="flex items-center gap-1.5 mt-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: statusDotColors[book.status] }}
          />
          <span className="text-xs" style={{ color: '#9B9790' }}>
            {statusLabels[book.status]}
          </span>
        </div>
      </div>
    </div>
  )
}
