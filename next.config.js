const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  search: {
    placeholder: 'Search documentation...'
  }
})

module.exports = withNextra({
  swcMinify: true
})
