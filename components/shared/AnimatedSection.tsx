'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  id: string
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ id, children, className = '' }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      aria-labelledby={`${id}-heading`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`py-16 lg:py-24 scroll-mt-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}
