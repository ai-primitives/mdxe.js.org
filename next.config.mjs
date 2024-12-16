import nextra from 'nextra'
import withNextra from 'nextra-theme-docs'

export default withNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
  latex: true,
  search: {
    codeblocks: true
  }
})
