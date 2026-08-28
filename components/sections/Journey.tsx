import SectionLabel from '@/components/ui/SectionLabel'
import AnimatedSection from '@/components/shared/AnimatedSection'

const stages = [
  {
    number: '01',
    title: 'Software Engineering',
    description: 'System design, Clean Architecture, OOP, full-stack backends with ASP.NET Core. The foundation everything else sits on.',
    status: 'established' as const,
  },
  {
    number: '02',
    title: 'Classical ML',
    description: 'Feature engineering, NLP pipelines, Scikit-learn classifiers from scratch. Understanding the math before the libraries.',
    status: 'established' as const,
  },
  {
    number: '03',
    title: 'Deep Learning',
    description: 'Neural network fundamentals, backpropagation, training loops. Building the bridge from classical to modern ML.',
    status: 'active' as const,
  },
  {
    number: '04',
    title: 'Computer Vision',
    description: 'OpenCV, image processing, real-time systems. Applied CV with a clear path toward learned representations.',
    status: 'active' as const,
  },
  {
    number: '05',
    title: 'AI Systems',
    description: 'End-to-end model deployment, production ML pipelines, the full stack from data to inference.',
    status: 'building' as const,
  },
]

const statusLabel: Record<'established' | 'active' | 'building', string> = {
  established: 'Established',
  active: 'Active',
  building: 'Building toward',
}

export default function Journey() {
  return (
    <AnimatedSection id="journey">
      <SectionLabel id="journey-heading">Journey</SectionLabel>
      <p className="mb-8 text-sm text-text-secondary">
        Where I&apos;ve been, where I am, and where I&apos;m going.
      </p>

      {/* Desktop: horizontal stepper */}
      <div className="hidden sm:flex items-start gap-0">
        {stages.map((stage, i) => (
          <div key={stage.number} className="flex-1 relative">
            {/* Connector line */}
            {i < stages.length - 1 && (
              <div
                className={`absolute top-3 left-1/2 h-px w-full z-0 ${
                  stage.status === 'established' ? 'bg-purple/40' :
                  stage.status === 'active' ? 'bg-green/30' :
                  'bg-border'
                }`}
                aria-hidden="true"
              />
            )}

            <div className="flex flex-col items-center text-center px-2 relative z-10">
              {/* Circle */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2 ${
                  stage.status === 'established'
                    ? 'bg-purple border-purple text-white'
                    : stage.status === 'active'
                    ? 'bg-green border-green text-navy'
                    : 'bg-transparent border-border text-text-muted'
                }`}
              >
                {stage.status === 'building' ? '' : ''}
              </div>

              <p className="mt-2 font-mono text-xs text-text-muted">{stage.number}</p>
              <p
                className={`mt-1 text-xs font-semibold ${
                  stage.status === 'established' ? 'text-purple' :
                  stage.status === 'active' ? 'text-green' :
                  'text-text-muted'
                }`}
              >
                {stage.title}
              </p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed hidden lg:block">
                {statusLabel[stage.status]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="sm:hidden space-y-0">
        {stages.map((stage, i) => (
          <div key={stage.number} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full flex-shrink-0 border-2 ${
                  stage.status === 'established'
                    ? 'bg-purple border-purple'
                    : stage.status === 'active'
                    ? 'bg-green border-green'
                    : 'bg-transparent border-border'
                }`}
              />
              {i < stages.length - 1 && (
                <div className={`w-px flex-1 min-h-[2rem] mt-1 ${
                  stage.status === 'established' ? 'bg-purple/30' :
                  stage.status === 'active' ? 'bg-green/20' :
                  'bg-border'
                }`} />
              )}
            </div>
            <div className="pb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-text-muted">{stage.number}</span>
                <span
                  className={`text-sm font-semibold ${
                    stage.status === 'established' ? 'text-purple' :
                    stage.status === 'active' ? 'text-green' :
                    'text-text-muted'
                  }`}
                >
                  {stage.title}
                </span>
                <span className="text-xs text-text-muted">— {statusLabel[stage.status]}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Descriptions on desktop */}
      <div className="hidden sm:grid mt-4 gap-0" style={{ gridTemplateColumns: `repeat(${stages.length}, 1fr)` }}>
        {stages.map((stage) => (
          <p key={stage.number} className="px-2 text-xs leading-relaxed text-text-muted text-center">
            {stage.description}
          </p>
        ))}
      </div>
    </AnimatedSection>
  )
}
