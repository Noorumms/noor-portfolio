import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/icons'
import AnimatedSection from '@/components/shared/AnimatedSection'

export default function BuildInPublic() {
  return (
    <AnimatedSection id="build-in-public">
      <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-green tracking-wider mb-2">BUILDING IN PUBLIC</p>
            <h2 className="text-xl font-bold text-text-primary">AI Roadmap</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary max-w-sm">
              Documenting the path from software engineering to AI systems — what I&apos;m learning,
              what I&apos;m building, and what&apos;s next.
            </p>
          </div>
          <GithubIcon size={24} className="text-text-muted flex-shrink-0 mt-1" />
        </div>

        <a
          href="https://github.com/Noorumms/ai-roadmap"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-purple px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-hover"
        >
          Follow the build
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </AnimatedSection>
  )
}
