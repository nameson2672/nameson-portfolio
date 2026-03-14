import Link from 'next/link'

export function Footer() {
  return (
    <footer
      className="max-w-[640px] mx-auto px-6 mt-16 pt-8 pb-12"
      style={{ borderTop: '1px solid rgba(28,28,26,0.10)' }}
    >
      <div className="flex gap-6 mb-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors"
          style={{ color: '#6B6860' }}
        >
          Twitter
        </a>
        <a
          href="https://github.com/nameson2672"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors"
          style={{ color: '#6B6860' }}
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition-colors"
          style={{ color: '#6B6860' }}
        >
          LinkedIn
        </a>
      </div>
      <p className="text-xs" style={{ color: '#9B9790' }}>
        &copy; Nameson Gaudel, 2026
      </p>
    </footer>
  )
}
