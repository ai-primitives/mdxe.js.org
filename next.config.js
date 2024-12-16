const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true
})

module.exports = withNextra({
  swcMinify: true,
  flexsearch: {
    codeblocks: true
  },
  search: {
    placeholder: 'Search documentation...'
  }
})
