const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  search: {
    codeblocks: true,
    placeholder: 'Search documentation...'
  }
})

module.exports = withNextra({
  swcMinify: true
})
