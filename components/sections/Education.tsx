import SectionLabel from '@/components/ui/SectionLabel'
import TechTag from '@/components/ui/TechTag'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { education, achievements } from '@/lib/data'

export default function Education() {
  return (
    <AnimatedSection id="education">
      <SectionLabel id="education-heading">Education</SectionLabel>

      <article className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
        <p className="font-mono text-sm text-text-muted">{education.dateRange}</p>

        <div>
          <h3 className="font-semibold text-text-primary">{education.degree}</h3>
          <p className="text-purple text-sm">{education.institution}</p>
          <p className="mt-1 text-sm text-text-secondary">CGPA: {education.cgpa}</p>

          <h4 className="mt-4 text-text-muted text-xs uppercase tracking-wider">
            Relevant Coursework
          </h4>
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Relevant coursework">
            {education.coursework.map((course) => (
              <li key={course}>
                <TechTag>{course}</TechTag>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-text-muted text-xs uppercase tracking-wider">Achievements</h4>
          <ul className="mt-2 space-y-2">
            {achievements.map((achievement) => (
              <li key={achievement.text} className="text-sm leading-relaxed text-text-secondary pl-4 relative">
                <span className="absolute left-0 text-purple">▸</span>
                {achievement.text}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </AnimatedSection>
  )
}
