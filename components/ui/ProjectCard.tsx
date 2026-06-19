import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import TechTag from './TechTag'
import { GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative -mx-4 rounded-lg border-l-2 border-transparent p-4 transition-all duration-200 hover:border-purple hover:bg-surface">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-text-muted">{project.year}</span>
        <span className="font-mono text-xs text-text-muted">{project.category}</span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary transition-colors duration-200 group-hover:text-purple">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tech.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-text-secondary hover:text-purple transition-colors duration-200"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon size={14} />
            GitHub
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-text-secondary hover:text-purple transition-colors duration-200"
        >
          View Details
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
