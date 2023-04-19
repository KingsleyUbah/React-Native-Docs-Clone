import {useState} from 'react'
import styles from './feedback.module.css'

function MyBtn() {
    return (
      <div className={styles.btn}>
        <span className={styles.inBtnText}>
            Is this page useful?
        </span>
        <button>
            <img className={styles.image} src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681479154023_thumbs-removebg-preview.png&hmac=v4Hb7kt3LPjCHu0ffpUrZ3gMV29P8yGv0yjZtG8qpfs%3D" alt="image" />
        </button>
        <button>
            <img className={styles.image} src="https://www.dropbox.com/paper/ep/redirect/image?url=https%3A%2F%2Fpaper-attachments.dropboxusercontent.com%2Fs_8DBD080458BC82C38C5265C10E1A2396B6E318C95FC96C295C6A241E0096B1AD_1681484313130_Thumbs_down_red.png&hmac=sNDHQ8VbiJ0MbGcvtimeE80NbenQ5YQ2rfzV0k8RSVE%3D" alt="image" />
        </button>
      </div>
    )
  }

  export default function MyApp() {
    return <MyBtn />
  }