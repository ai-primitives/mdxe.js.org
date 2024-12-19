import React from 'react'
import Head from 'next/head'

function Logo() {
  return <span>MDXe</span>
}

export default {
  logo: <Logo />,
  project: {
    link: 'https://github.com/ai-primitives/mdxe',
    chat: {
      link: 'https://discord.gg/BHZCzx83'
    }
  },
  navigation: {
    next: true,
    prev: true
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxe.js.org/tree/main',
  useNextSeoProps() {
    return {
      metadataBase: new URL('https://mdxe.js.org'),
      titleTemplate: '%s – MDXe',
      defaultTitle: 'MDXe - Zero-config MDX processor and Next.js integration',
      description: 'MDXe: Zero-config MDX processor with Next.js integration, remote components, and CLI tools',
      applicationName: 'MDXe',
      generator: 'Next.js',
      keywords: ['mdx', 'next.js', 'markdown', 'documentation', 'static site'],
      authors: [{ name: 'AI Primitives' }],
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://mdxe.js.org',
        siteName: 'MDXe Documentation',
        images: [
          {
            url: 'https://mdxe.js.org/og-image.png',
            width: 1200,
            height: 630,
            alt: 'MDXe Documentation'
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
    text: 'MIT © 2024 MDXe'
  }
}
