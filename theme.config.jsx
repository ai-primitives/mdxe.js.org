import React from 'react'

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
      titleTemplate: '%s – MDXE',
      defaultTitle: 'MDXE - Zero-config MDX processor and Next.js integration',
      description: 'MDXE: Zero-config MDX processor with Next.js integration, remote components, and CLI tools',
      canonical: 'https://mdxe.js.org',
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
        handle: '@ai_primitives',
        site: '@ai_primitives',
        cardType: 'summary_large_image'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="mdx, next.js, markdown, documentation, static site" />
      <meta name="author" content="AI Primitives" />
      <meta name="generator" content="Next.js" />
      <link rel="canonical" href="https://mdxe.js.org" />
    </>
  ),
  footer: {
    text: 'MIT © 2024 MDXE'
  }
}
