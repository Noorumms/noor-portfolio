'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return true
  const stored = localStorage.getItem('theme')
  return stored ? stored === 'dark' : true
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center rounded-md border border-border p-2 text-text-secondary transition-colors duration-200 hover:border-purple hover:text-purple"
    >
      {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  )
}
