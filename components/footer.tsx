import React from 'react'
import styles from './footer.module.css'

export function Footer() {
    return (
    <div style={{ display: 'flex', fontSize: '0.97rem', alignItems:'center', justifyContent: 'space-around', maxWidth: '100%', backgroundColor: '#20232A', color: 'white', padding: '23px 2rem' }}>
        <div>
          <h3 style={{color: 'gray', marginBottom: '10px'}}>DEVELOP</h3>
          <ul>
            <li><a className='footerLink' href=''>Guides</a></li>
            <li><a className='footerLink' href=''>Components</a></li>
            <li><a className='footerLink' href=''>APIs</a></li>
            <li><a className='footerLink'href=''>Architecture</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{color: 'gray', marginBottom: '10px'}}>FIND US</h3>
          <ul>
            <li><a className='footerLink' href=''>Blog</a></li>
            <li><a className='footerLink' href=''>Twitter</a></li>
            <li><a className='footerLink' href=''>GitHub</a></li>            
          </ul>
        </div>
        <div>
          <h3 style={{color: 'gray', marginBottom: '10px'}}>PARTICIPATE</h3>
          <ul>
            <li><a className='footerLink' href=''>Showcase</a></li>
            <li><a className='footerLink' href=''>Community</a></li>
            <li><a className='footerLink' href=''>Contributing</a></li>
            <li><a className='footerLink'href=''>Guides</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{color: 'gray', marginBottom: '10px'}}>EXPLORE MORE</h3>
          <ul>
            <li><a className='footerLink' href=''>ReactJS</a></li>
            <li><a className='footerLink' href=''>Privacy Policy</a></li>
            <li><a className='footerLink' href=''>Terms of service</a></li>            
          </ul>
        </div>
    </div>
    )
}