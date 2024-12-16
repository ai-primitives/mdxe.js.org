import React from 'react'

function Logo() {
  return (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <strong>MDXE</strong>
      <span style={{ marginLeft: '0.4em', opacity: 0.6 }}>
        Zero-config MDX processor
      </span>
    </span>
  )
}

const themeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/ai-primitives/mdxe'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxe.js.org/tree/main',
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="MDXE: Zero-config MDX processor with Next.js integration" />
      <meta name="og:title" content="MDXE Documentation" />
    </>
  ),
  footer: {
    text: 'MIT © 2024 MDXE'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MDXE'
    }
  }
}

export default themeConfig
