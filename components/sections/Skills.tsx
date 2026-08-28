import SectionLabel from '@/components/ui/SectionLabel'
import TechTag from '@/components/ui/TechTag'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { skillGroups } from '@/lib/data'

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionLabel id="skills-heading">Skills</SectionLabel>

      <div className="space-y-6">
        {skillGroups.map((group) => {
          const isML = group.label === 'Machine Learning'
          return (
            <div
              key={group.label}
              className={`grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6 ${
                isML ? 'rounded-lg border border-green/20 bg-green/5 p-4 -mx-4' : ''
              }`}
            >
              <h3
                className={`text-xs uppercase tracking-wider font-semibold ${
                  isML ? 'text-green' : 'text-text-muted'
                }`}
              >
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TechTag>{skill}</TechTag>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
