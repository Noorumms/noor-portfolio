'use client'

import { navItems } from '@/lib/data'
import { useActiveSection } from '@/components/shared/ScrollActiveNav'

const sectionIds = navItems.map((item) => item.id)

export default function Nav() {
  const activeId = useActiveSection(sectionIds)

  return (
    <nav aria-label="In-page navigation">
      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex items-center gap-3 border-l-2 py-1 pl-4 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-purple text-text-primary'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
