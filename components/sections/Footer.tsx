import { personalInfo } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'

export default function Footer() {
  return (
    <footer id="contact" className="py-16 lg:py-24 border-t border-border">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Let&apos;s build something useful.
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
        Open to software engineering, full-stack, and ML opportunities — remote or Lahore-based.
        Reach out directly at{' '}
        <a
          href="mailto:noorefatimah0@gmail.com"
          className="text-green hover:text-green transition-colors duration-200"
        >
          noorefatimah0@gmail.com
        </a>
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="mt-6 inline-block font-mono text-lg text-green transition-colors duration-200 hover:opacity-80"
      >
        {personalInfo.email}
      </a>

      <div className="mt-6 flex items-center gap-6">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-green"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-green"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>

      <p className="mt-12 text-xs text-text-muted">
        Noor Fatima © 2026 — now go build something.
      </p>
    </footer>
  )
}
