import React from 'react'

const config = {
  logo: React.createElement('span', null, 'MDXE'),
  project: {
    link: 'https://github.com/ai-primitives/mdxe'
  },
  docsRepositoryBase: 'https://github.com/ai-primitives/mdxe.js.org/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MDXE'
    }
  }
}

export default config
