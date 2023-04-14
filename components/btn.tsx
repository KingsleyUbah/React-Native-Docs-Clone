import {useState} from 'react'
import styles from './btn.module.css'

function MyBtn() {
    return (
      <div className={styles.btn}>
        <span className={styles.inBtnText}>
            Is this page useful?
        </span>
        <button>
            <img className={styles.image} src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681479154023_thumbs-removebg-preview.png&hmac=6omL5u%2FW9AyrJyzkAD0vY%2FA3AZXqQbhbJ%2FzWyv%2BuD5c%3D" alt="image" />
        </button>
        <button>
            <img className={styles.image} src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681484313130_Thumbs_down_red.png&hmac=mUP9YTvKZej3g5ya3xTQWydSIMtBYO6Yx84pp%2Bb8qI8%3D" alt="image" />
        </button>
      </div>
    )
  }

  export default function MyApp() {
    return <MyBtn />
  }