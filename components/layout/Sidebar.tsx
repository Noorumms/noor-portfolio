import { Mail, Download, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import Nav from './Nav'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[320px] lg:flex lg:flex-col lg:justify-between px-6 py-12 lg:px-12 lg:py-16">
      <div>
        {/* Status indicator */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/5 px-3 py-1">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />
          <span className="font-mono text-xs font-medium text-green tracking-wider">
            ML INTERN @ EBRYX
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-none">
          {personalInfo.name}
        </h1>
        <p className="mt-2 text-base font-semibold text-text-primary">{personalInfo.role}</p>

        {/* Progression line */}
        <div className="mt-3 flex items-center gap-1.5 font-mono text-xs">
          <span className="text-text-muted">SE</span>
          <span className="text-border">→</span>
          <span className="text-text-muted">ML</span>
          <span className="text-border">→</span>
          <span className="text-green font-medium">CV</span>
        </div>

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
          {personalInfo.oneLiner}
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 rounded-md bg-purple px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-purple-hover"
          >
            View Projects
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-text-secondary transition-colors duration-200 hover:text-text-primary hover:border-text-secondary"
          >
            <GithubIcon size={13} />
            GitHub
          </a>
        </div>

        <div className="mt-10 hidden lg:block">
          <Nav />
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4 lg:mt-0">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-text-secondary transition-colors duration-200 hover:text-green"
        >
          <LinkedinIcon size={18} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Send an email"
          className="text-text-secondary transition-colors duration-200 hover:text-green"
        >
          <Mail size={18} />
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md bg-purple border border-purple px-3 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-purple-hover hover:border-purple-hover"
        >
          <Download size={13} aria-hidden="true" />
          Resume
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
