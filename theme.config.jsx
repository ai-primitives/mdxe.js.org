import { useConfig } from 'nextra-theme-docs'

export default {
  logo: (
    <div>
      <b>MDXE</b> <span style={{ opacity: '60%' }}>Zero-config MDX processor</span>
    </div>
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
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/ai-primitives/mdxe" target="_blank">
          MDXE
        </a>
      </span>
    )
  }
}
