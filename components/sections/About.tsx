import SectionLabel from '@/components/ui/SectionLabel'
import MetricCard from '@/components/ui/MetricCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { metrics } from '@/lib/data'

export default function About() {
  return (
    <AnimatedSection id="about">
      <SectionLabel id="about-heading">About</SectionLabel>

      <div className="space-y-5 text-base leading-relaxed text-text-secondary">
        <p>
          I&apos;m a Software Engineering student at PUCIT Lahore building toward Machine Learning
          and Computer Vision. Software engineering is my foundation — I know how to design systems,
          write maintainable code, and ship things that actually work.
        </p>
        <p>
          My current path is Classical ML → Deep Learning → Computer Vision. I&apos;m now interning
          in ML at Ebryx, working on real ML workflows and strengthening my understanding of how
          models get built and deployed in practice.
        </p>
        <p>
          I&apos;ve TA&apos;d OOP and Software Engineering at PUCIT for 200+ students a semester.
          Teaching forces clarity. You can&apos;t explain SOLID principles to a room of 200 without
          genuinely understanding them yourself.
        </p>
        <p>
          I build things to understand them: ML classifiers from scratch, a full-stack marketplace
          with Clean Architecture, a real-time CV app using only a webcam and HSV color detection.
          Each project is a forcing function for depth.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </div>
    </AnimatedSection>
  )
}
