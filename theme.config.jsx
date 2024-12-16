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
      titleTemplate: '%s – MDXE'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="MDXE: Zero-config MDX processor with Next.js integration" />
      <meta name="og:title" content="MDXE Documentation" />
    </>
  ),
  footer: {
    text: 'MIT © 2024 MDXE'
  }
}
