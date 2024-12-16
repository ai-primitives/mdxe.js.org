/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const { viewport } = Head

export const metadata = {
  metadataBase: new URL('https://mdxe.js.org'),
  title: {
    template: '%s - MDXE',
    default: 'MDXE - Zero-config MDX processor and Next.js integration'
  },
  description: 'MDXE: Zero-config MDX processor with Next.js integration, remote components, and CLI tools',
  applicationName: 'MDXE',
  generator: 'Next.js',
  keywords: ['mdx', 'next.js', 'markdown', 'documentation', 'static site'],
  authors: [{ name: 'AI Primitives' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mdxe.js.org',
    siteName: 'MDXE Documentation',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ai_primitives'
  }
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          navbar={<Navbar />}
          footer={<Footer />}
          docsRepositoryBase='https://github.com/ai-primitives/mdxe.js.org'
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
