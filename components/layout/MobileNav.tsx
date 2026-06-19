'use client'

import { navItems, personalInfo } from '@/lib/data'
import { useActiveSection } from '@/components/shared/ScrollActiveNav'

const sectionIds = navItems.map((item) => item.id)

export default function MobileNav() {
  const activeId = useActiveSection(sectionIds)

  return (
    <nav
      aria-label="In-page navigation"
      className="lg:hidden sticky top-0 z-40 -mx-6 mb-8 border-b border-border bg-navy/95 px-6 py-3 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold text-text-primary">{personalInfo.name}</span>
        <ul className="flex gap-4 overflow-x-auto text-sm">
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`whitespace-nowrap transition-colors duration-200 ${
                    isActive ? 'text-purple' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
