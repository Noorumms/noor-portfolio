import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { projects, type Project } from './data'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects')

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getProjectMeta(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectContent(slug: string): { content: string; data: Record<string, unknown> } {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(raw)
  return { content, data }
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((project) => project.slug === slug)
  const prev = index > 0 ? projects[index - 1] : null
  const next = index < projects.length - 1 ? projects[index + 1] : null
  return { prev, next }
}
