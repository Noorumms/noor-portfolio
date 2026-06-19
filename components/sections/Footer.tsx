import { personalInfo } from '@/lib/data'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'

export default function Footer() {
  return (
    <footer className="py-16 lg:py-24 border-t border-border">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        Let&apos;s work together.
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
        I&apos;m currently open to Software Engineering internship opportunities — remote or
        Lahore-based. If you&apos;re hiring or know someone who is, I&apos;d love to hear from
        you.
      </p>

      <a
        href={`mailto:${personalInfo.email}`}
        className="mt-6 inline-block font-mono text-lg text-purple transition-colors duration-200 hover:text-purple-hover"
      >
        {personalInfo.email}
      </a>

      <div className="mt-6 flex items-center gap-6">
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
        >
          <LinkedinIcon size={16} />
          LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>

      <p className="mt-12 text-xs text-text-muted">
        Built with Next.js &amp; Tailwind. Designed with intention.
      </p>
    </footer>
  )
}
