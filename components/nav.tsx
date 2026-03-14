'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/writing', label: 'Writing' },
    { href: '/bookshelf', label: 'Bookshelf' },
    { href: '/papers', label: 'Papers' },
  ]

  return (
    <nav
      className="py-6 px-10 flex justify-between items-center"
      style={{ borderBottom: '1px solid rgba(28,28,26,0.10)' }}
    >
      <Link
        href="/"
        className="font-medium transition-colors"
        style={{ color: '#1C1C1A' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#C4622D')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#1C1C1A')}
      >
        Nameson Gaudel
      </Link>
      <div className="flex gap-8">
        {links.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: isActive ? '#C4622D' : '#6B6860' }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
