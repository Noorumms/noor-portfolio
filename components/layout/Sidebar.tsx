import { Mail, Download } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[320px] lg:flex lg:flex-col lg:justify-between px-6 py-12 lg:px-12 lg:py-16">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          {personalInfo.name}
        </h1>
        <p className="mt-2 text-lg font-semibold text-text-primary">{personalInfo.role}</p>
        <p className="mt-1 font-mono text-sm text-purple">{personalInfo.tagline}</p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
          {personalInfo.oneLiner}
        </p>

        <div className="mt-10 hidden lg:block">
          <Nav />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 lg:mt-0">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-text-secondary transition-colors duration-200 hover:text-purple"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-text-secondary transition-colors duration-200 hover:text-purple"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Send an email"
          className="text-text-secondary transition-colors duration-200 hover:text-purple"
        >
          <Mail size={20} />
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-purple hover:text-purple"
        >
          <Download size={14} aria-hidden="true" />
          Resume
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
