interface TechTagProps {
  children: string
  size?: 'sm' | 'md'
}

export default function TechTag({ children, size = 'sm' }: TechTagProps) {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-xs px-2.5 py-1'

  return (
    <span
      className={`font-mono border border-border bg-navy text-text-secondary rounded ${sizeClasses}`}
    >
      {children}
    </span>
  )
}
