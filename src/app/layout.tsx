import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://builtup.sg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BuiltUp — Find Trusted Contractors in Singapore',
    template: '%s | BuiltUp',
  },
  description:
    'Discover and contact verified plumbers, electricians, aircon specialists, painters, and more in Singapore. No middlemen — direct WhatsApp contact.',
  openGraph: {
    type: 'website',
    siteName: 'BuiltUp',
    title: 'BuiltUp — Find Trusted Contractors in Singapore',
    description:
      'Discover and contact verified plumbers, electricians, aircon specialists, painters, and more in Singapore.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuiltUp — Find Trusted Contractors in Singapore',
    description:
      'Discover and contact verified plumbers, electricians, aircon specialists, painters, and more in Singapore.',
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased font-sans">
        {/* Skip to main content — keyboard / screen-reader accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-brand-500 focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
