const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  search: {
    codeblocks: true,
    placeholder: 'Search documentation...'
  }
})

module.exports = withNextra()
