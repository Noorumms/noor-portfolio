import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { personalInfo } from '@/lib/data'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: 'Noor Fatima — Software Engineer',
    template: '%s | Noor Fatima',
  },
  description:
    'Final-year Software Engineering student at PUCIT Lahore. Building full-stack web apps, ML pipelines, and Android applications. Open to internship opportunities.',
  keywords: [
    'Noor Fatima',
    'software engineer Pakistan',
    'full stack developer Lahore',
    'ASP.NET Core developer',
    'machine learning engineer',
    'PUCIT software engineering',
    'software engineering internship',
  ],
  authors: [{ name: 'Noor Fatima' }],
  creator: 'Noor Fatima',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.siteUrl,
    title: 'Noor Fatima — Software Engineer',
    description: 'Full-Stack, ML & .NET engineer. Final year at PUCIT Lahore.',
    siteName: 'Noor Fatima',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Fatima — Software Engineer',
    description: 'Full-Stack, ML & .NET engineer. Final year at PUCIT Lahore.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noor Fatima',
  jobTitle: 'Software Engineering Student',
  email: personalInfo.email,
  url: personalInfo.siteUrl,
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Punjab University College of Information Technology',
  },
  sameAs: [personalInfo.linkedin, personalInfo.github],
  knowsAbout: [
    'Software Engineering',
    'Machine Learning',
    'ASP.NET Core',
    'Python',
    'Full-Stack Development',
    'Android Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-text-primary font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
