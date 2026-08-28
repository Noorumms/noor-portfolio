import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
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

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: 'Noor Fatima — Software Engineering × Machine Learning',
    template: '%s | Noor Fatima',
  },
  description:
    'BS Software Engineering student at PUCIT Lahore (Class of 2027), currently interning in Machine Learning at Ebryx. Building end-to-end AI systems: ML pipelines, ASP.NET Core backends, Computer Vision.',
  keywords: [
    'Noor Fatima',
    'software engineer Pakistan',
    'machine learning intern',
    'full stack developer Lahore',
    'ASP.NET Core developer',
    'computer vision Python',
    'PUCIT software engineering',
    'ML engineer student',
  ],
  authors: [{ name: 'Noor Fatima' }],
  creator: 'Noor Fatima',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.siteUrl,
    title: 'Noor Fatima — Software Engineering × Machine Learning',
    description: 'Software Engineering student at PUCIT. ML Intern at Ebryx. Building toward AI systems.',
    siteName: 'Noor Fatima',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Fatima — Software Engineering × Machine Learning',
    description: 'Software Engineering student at PUCIT. ML Intern at Ebryx. Building toward AI systems.',
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
  jobTitle: 'Machine Learning Intern',
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
    'Computer Vision',
    'ASP.NET Core',
    'Python',
    'Full-Stack Development',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
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
