import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data'
import TechTag from './TechTag'
import { GithubIcon } from './icons'

interface ProjectCardProps {
  project: Project
  index?: number
  compact?: boolean
}

export default function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, '0')

  if (compact) {
    return (
      <div className="group relative -mx-4 rounded-lg border-l-2 border-transparent p-4 transition-all duration-200 hover:border-green hover:bg-surface">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-text-muted">{project.year}</span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-text-muted">{project.category}</span>
            </div>
            <h3 className="text-sm font-semibold text-text-primary group-hover:text-green transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="text-text-muted hover:text-green transition-colors duration-200"
              >
                <GithubIcon size={15} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="text-text-muted hover:text-green transition-colors duration-200"
              aria-label={`View details for ${project.title}`}
            >
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tech.slice(0, 4).map((tech) => (
            <li key={tech}>
              <TechTag>{tech}</TechTag>
            </li>
          ))}
          {project.tech.length > 4 && (
            <li>
              <TechTag>{`+${project.tech.length - 4}`}</TechTag>
            </li>
          )}
        </ul>
      </div>
    )
  }

  return (
    <div className="group relative -mx-4 rounded-lg border-l-2 border-transparent p-4 transition-all duration-200 hover:border-green hover:bg-surface">
      <div className="flex items-start gap-4">
        <span className="font-mono text-3xl font-bold text-border group-hover:text-green/30 transition-colors duration-200 leading-none select-none flex-shrink-0 hidden sm:block">
          {num}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-text-muted">{project.year}</span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-text-muted">{project.category}</span>
            </div>
            {project.inProgress && (
              <span className="inline-flex items-center rounded px-1.5 py-0.5 text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                In Progress
              </span>
            )}
          </div>

          <h3 className="text-lg font-semibold text-text-primary transition-colors duration-200 group-hover:text-green">
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

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded bg-purple px-2.5 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-purple-hover"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={13} />
                GitHub
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded bg-purple px-2.5 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-purple-hover"
                aria-label={`Live demo of ${project.title}`}
              >
                Live Demo
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ) : project.inProgress ? (
              <span className="text-text-muted text-xs">Deployment planned</span>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded bg-purple px-2.5 py-1 text-xs font-medium text-white transition-colors duration-200 hover:bg-purple-hover"
            >
              View Details
              <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
