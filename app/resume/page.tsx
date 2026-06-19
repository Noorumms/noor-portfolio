import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume',
  description: "Noor Fatima's resume — Software Engineering student at PUCIT Lahore.",
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-[900px] px-6 py-12 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-purple"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>

      <div className="mt-8 flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
          Resume
        </h1>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors duration-200 hover:border-purple hover:text-purple"
        >
          <Download size={14} aria-hidden="true" />
          Download PDF
        </a>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-border bg-surface">
        <iframe
          src="/resume.pdf"
          title="Noor Fatima's resume"
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  )
}
