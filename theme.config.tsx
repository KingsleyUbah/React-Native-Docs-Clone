import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from './components/theme.module.css'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems:'flex-start', justifyContent: 'center', width: '100%' }}>
      <img 
        width="40" 
        height="40" 
        src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681485196984_React-removebg-preview.png&hmac=hF2KHnFWNNTWCK0JHeCdssrQmWWVu560OdTJX940EUM%3D" 
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
