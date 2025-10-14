import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UX-Ray | AI-Powered UX Evaluation for Figma',
  description: 'See your UX through AI eyes. UX-Ray is an AI-powered evaluation layer for Figma that analyzes usability and accessibility directly in your design workspace.',
  keywords: 'UX, AI, Figma, Design, Accessibility, WCAG, Nielsen Norman, Heuristics, UX Audit',
  authors: [{ name: 'Dimitris G.' }],
  openGraph: {
    title: 'UX-Ray | AI-Powered UX Evaluation',
    description: 'See your UX through AI eyes. Transform complex UX audits into fast, insightful feedback.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

