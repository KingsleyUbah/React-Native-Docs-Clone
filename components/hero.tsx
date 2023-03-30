import {useState} from 'react'
import styles from './hero.module.css'

function MyBanner() {
    return (
      <div className={styles.hero}>
        <div>
            Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, they've moved to their own section. Continue reading for an introduction to the documentation, Native Components, React, and more!
        </div>

        <img className={styles.image} src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1680188128120_android-device-removebg-preview.png&hmac=BduqNF9K8yIjIQZPOPp8MUJD3efYU9g0cEeWWIONwmk%3D" alt="image" />
      </div>
    )
  }

  export default function MyApp() {
    return <MyBanner />
  }