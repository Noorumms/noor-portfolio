import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import TechTag from '@/components/ui/TechTag'
import { GithubIcon } from '@/components/ui/icons'
import { getProjectSlugs, getProjectMeta, getProjectContent, getAdjacentProjects } from '@/lib/projects'

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectMeta(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Noor Fatima`,
      description: project.description,
    },
  }
}

const mdxComponents = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="mt-10 mb-4 text-xl font-bold text-text-primary" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="mb-4 text-sm leading-relaxed text-text-secondary" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="mb-4 space-y-2 text-sm leading-relaxed text-text-secondary" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="pl-4 relative">
      <span className="absolute left-0 text-text-muted">•</span>
      <span>{props.children}</span>
    </li>
  ),
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectMeta(slug)
  if (!project) notFound()

  const { content } = getProjectContent(slug)
  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="mx-auto max-w-[760px] px-6 py-12 lg:py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to all projects
      </Link>

      <p className="mt-8 font-mono text-xs text-text-muted">
        {project.category} · {project.year}
      </p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
        {project.title}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
          >
            <GithubIcon size={16} />
            GitHub
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
          >
            Live Demo
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        )}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tech.map((tech) => (
          <li key={tech}>
            <TechTag>{tech}</TechTag>
          </li>
        ))}
      </ul>

      <hr className="my-8 border-border" />

      <div className="prose-content">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      <hr className="my-8 border-border" />

      <nav className="flex items-center justify-between gap-4 text-sm" aria-label="Project navigation">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="text-text-secondary transition-colors duration-200 hover:text-purple"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="text-text-secondary transition-colors duration-200 hover:text-purple"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  )
}
