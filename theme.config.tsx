import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems:'flex-start', justifyContent: 'center', width: '100%' }}>
      <img 
        width="50" 
        height="50" 
        src="https://imgur.com/j9M0xPE" 
        alt="image"           
      />
      <span style={{ marginLeft: '.4em', marginTop: '.2em', fontWeight: 700, fontSize:"20px", color: 'black' }}>
        React Native
      </span>
    </div>
  ),
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
    text: 'Nextra Docs Template',
  },
}

export default config
