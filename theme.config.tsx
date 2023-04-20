import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {Logo} from './components/logo'
import {Footer} from './components/footer'

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  banner: {    
    text: <span style={{fontWeight: 500, fontSize:"21px", color: 'white' }}> Support Ukraine 🇺🇦 <a style={{color: '#61DAFB', textDecoration:'underline' }} href="https://nextra.site" target="_blank">
    Help Provide Humanitarian Aid To Ukraine
  </a>.</span>,
  },  
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: Footer
  },
}

export default config
