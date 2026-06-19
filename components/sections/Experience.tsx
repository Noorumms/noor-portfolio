import SectionLabel from '@/components/ui/SectionLabel'
import TechTag from '@/components/ui/TechTag'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionLabel id="experience-heading">Experience</SectionLabel>

      <div className="space-y-10">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-text-muted">{experience.dateRange}</p>

            <div>
              <h3 className="font-semibold text-text-primary">{experience.role}</h3>
              <p className="text-purple text-sm">
                {experience.company} · {experience.location}
              </p>

              <ul className="mt-3 space-y-2">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-text-secondary pl-4 relative">
                    <span className="absolute left-0 text-text-muted">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
                {experience.tech.map((tech) => (
                  <li key={tech}>
                    <TechTag>{tech}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
