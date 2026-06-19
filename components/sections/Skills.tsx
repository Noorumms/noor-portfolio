import SectionLabel from '@/components/ui/SectionLabel'
import TechTag from '@/components/ui/TechTag'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { skillGroups } from '@/lib/data'

export default function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionLabel id="skills-heading">Skills</SectionLabel>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6">
            <h3 className="text-text-muted text-xs uppercase tracking-wider">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <TechTag>{skill}</TechTag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
