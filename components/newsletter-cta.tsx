'use client'

export function NewsletterCta() {
  return (
    <div className="rounded-2xl p-8 mt-10" style={{ backgroundColor: '#1C1C1A' }}>
      <h3 className="text-lg font-medium mb-2" style={{ color: '#F5F0E8' }}>
        Stay in the loop
      </h3>
      <p className="text-sm mb-6 leading-relaxed" style={{ color: '#8A8880' }}>
        I write about distributed systems, engineering craft, and the occasional book note. No spam
        — roughly once or twice a month.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          window.open('https://substack.com', '_blank')
        }}
        className="flex gap-2"
      >
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 rounded-lg px-4 py-2.5 text-sm focus:outline-none"
          style={{
            backgroundColor: '#2A2A28',
            border: '1px solid #3A3A38',
            color: '#F5F0E8',
          }}
        />
        <button
          type="submit"
          className="text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          style={{ backgroundColor: '#C4622D', color: '#fff' }}
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
