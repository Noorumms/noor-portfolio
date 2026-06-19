import SectionLabel from '@/components/ui/SectionLabel'
import ProjectCard from '@/components/ui/ProjectCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import ExternalLink from '@/components/ui/ExternalLink'
import { projects, personalInfo } from '@/lib/data'

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionLabel id="projects-heading">Projects</SectionLabel>

      <p className="text-sm text-text-secondary mb-6">
        A selection of what I&apos;ve built — the full archive is on{' '}
        <ExternalLink href={personalInfo.github} className="inline">
          GitHub
        </ExternalLink>
        .
      </p>

      <div className="divide-y divide-border">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-8">
        <ExternalLink href={personalInfo.github} className="text-sm font-medium">
          View All Projects on GitHub
        </ExternalLink>
      </div>
    </AnimatedSection>
  )
}
