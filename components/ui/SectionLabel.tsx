interface SectionLabelProps {
  children: string
  id?: string
}

export default function SectionLabel({ children, id }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 id={id} className="text-text-muted text-xs font-mono uppercase tracking-widest whitespace-nowrap">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  )
}
