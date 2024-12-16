import React from 'react'
import { useConfig } from 'nextra-theme-docs'

const config = {
  logo: (
    <span>
      <strong>MDXE</strong>
      <span style={{ marginLeft: '0.4em', opacity: 0.6 }}>
        Zero-config MDX processor
      </span>
    </span>
  ),
  project: {
    link: 'https://github.com/ai-primitives/mdxe'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxe.js.org/tree/main',
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – MDXE',
      description: frontMatter.description || 'MDXE: Zero-config MDX processor with Next.js integration'
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
    component: (
      <footer className="nx-bg-neutral-50 nx-py-6 nx-px-4">
        <div className="nx-container mx-auto">
          <div className="nx-mt-4 nx-text-center">
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://github.com/ai-primitives/mdxe" target="_blank" rel="noopener">
              MDXE
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default config
