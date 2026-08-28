import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import ExternalLink from '@/components/ui/ExternalLink'
import { projects, personalInfo } from '@/lib/data'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <AnimatedSection id="projects">
      <SectionLabel id="projects-heading">Projects</SectionLabel>

      <p className="text-sm text-text-secondary mb-8">
        A selection of what I&apos;ve built — the full archive is on{' '}
        <ExternalLink href={personalInfo.github} className="inline">
          GitHub
        </ExternalLink>
        .
      </p>

      <div className="divide-y divide-border">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-10">
          <h3 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-4">
            More Projects
          </h3>
          <div className="divide-y divide-border">
            {more.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={featured.length + i} compact />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <ExternalLink href={personalInfo.github} className="text-sm font-medium">
          View All on GitHub
        </ExternalLink>
      </div>
    </AnimatedSection>
  )
}
