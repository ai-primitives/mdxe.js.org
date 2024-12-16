import React from 'react'
import Head from 'next/head'

function Logo() {
  return <span>MDXE</span>
}

export default {
  logo: <Logo />,
  project: {
    link: 'https://github.com/ai-primitives/mdxe'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxe.js.org/tree/main',
  useNextSeoProps() {
    return {
      metadataBase: new URL('https://mdxe.js.org'),
      titleTemplate: '%s – MDXE',
      defaultTitle: 'MDXE - Zero-config MDX processor and Next.js integration',
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
        images: [
          {
            url: 'https://mdxe.js.org/og-image.png',
            width: 1200,
            height: 630,
            alt: 'MDXE Documentation'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        site: '@ai_primitives',
        creator: '@ai_primitives'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="mdx, next.js, markdown, documentation, static site" />
      <meta name="author" content="AI Primitives" />
      <meta name="generator" content="Next.js" />
      <meta name="application-name" content="MDXE" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="https://mdxe.js.org" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MDXE Documentation" />
      <link rel="canonical" href="https://mdxe.js.org" />
    </>
  ),
  footer: {
    text: 'MIT © 2024 MDXE'
  }
}
