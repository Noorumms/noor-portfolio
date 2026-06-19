import type { Metric } from '@/lib/data'

export default function MetricCard({ value, label }: Metric) {
  return (
    <div className="border border-border rounded-lg p-5 bg-surface">
      <div className="text-green text-2xl font-bold">{value}</div>
      <div className="text-text-muted text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  )
}
