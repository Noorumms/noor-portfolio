import type { MetadataRoute } from 'next'
import { personalInfo, projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((project) => ({
    url: `${personalInfo.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  return [
    { url: personalInfo.siteUrl, lastModified: new Date() },
    { url: `${personalInfo.siteUrl}/resume`, lastModified: new Date() },
    ...projectEntries,
  ]
}
