import React from 'react'
import styles from './logo.module.css'

export function Logo() {
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%' 
        }}
        className="logoImage"
        >
            <img 
            width="40" 
            height="40" 
            src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681485196984_React-removebg-preview.png&hmac=hF2KHnFWNNTWCK0JHeCdssrQmWWVu560OdTJX940EUM%3D" 
            alt="image"           
            className="logoPic"
            />
            <span style={{ marginLeft: '.4em', marginTop: '.2em', fontWeight: 700, fontSize:"20px", color: 'black' }}
            id="logoText"
            >
            React Native
            </span>
      </div>
    )
}