import { getBooks } from '@/lib/content'
import { BookItem } from '@/components/book-item'
import type { BookStatus } from '@/types'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Bookshelf',
  description: "Books I'm reading, have finished, or plan to read.",
}

const statusOrder: BookStatus[] = ['reading', 'finished', 'queued']
const statusLabels: Record<BookStatus, string> = {
  reading: 'Currently reading',
  finished: 'Finished',
  queued: 'Want to read',
}

export default function BookshelfPage() {
  const books = getBooks()

  return (
    <div className="max-w-[640px] mx-auto px-6 pt-12 pb-16">
      <h1 className="text-3xl font-medium mb-3" style={{ color: '#1C1C1A' }}>
        Bookshelf
      </h1>
      <p className="mb-10" style={{ color: '#6B6860' }}>
        Books I&apos;m reading, have finished, or plan to read. My taste runs toward systems
        thinking, engineering craft, and the occasional philosophy of mind.
      </p>

      {statusOrder.map((status) => {
        const statusBooks = books.filter((b) => b.status === status)
        if (statusBooks.length === 0) return null
        return (
          <section key={status} className="mb-10">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#9B7B4D' }}>
              {statusLabels[status]}
            </p>
            {statusBooks.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </section>
        )
      })}
    </div>
  )
}
