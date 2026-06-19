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
          I&apos;m a final-year Software Engineering student at PUCIT Lahore building AI-powered
          systems end to end — from the model to the product.
        </p>
        <p>
          I write code that does something — a gallery app where every layer has a defined
          responsibility, an NLP classifier that outperforms baselines by iterating on
          evaluation metrics, automation workflows that reclaim 60% of manual scheduling time.
        </p>
        <p>
          I&apos;m finishing my BS in Software Engineering at PUCIT Lahore (CGPA 3.5), where I
          also TA for OOP and Software Engineering courses for 200+ students per semester.
          Teaching forces clarity — you can&apos;t explain SOLID principles to a room of 200
          without genuinely understanding them yourself.
        </p>
        <p>
          My stack spans more than most students at this stage: ASP.NET Core MVC on the
          backend, Python with Scikit-learn and OpenCV for ML, Kotlin with Jetpack Compose for
          Android, and n8n for automation. I build what the problem requires.
        </p>
        <p>
          I&apos;m actively looking for Software Engineering, Full-Stack, or ML internship
          opportunities — remote or Lahore-based — where I can contribute from the first week.
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
