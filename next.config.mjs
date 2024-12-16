import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: true
  },
  contentDirBasePath: '/',
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
})
