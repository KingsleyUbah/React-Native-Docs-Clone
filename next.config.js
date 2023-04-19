const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/basics/getting-started',
        permanent: true
      }
    ]
  }
})

module.exports = withNextra()
