import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: 'export'
})

export default withNextra({
  basePath: '/info3d',
  trailingSlash: true,
  images: { unoptimized: true }
})
