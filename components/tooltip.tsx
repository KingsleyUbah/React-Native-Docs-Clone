import {useState} from 'react'
import styles from './tooltip.module.css'

function MyTooltip() {
    let content = "While we do our best to assume no prior knowledge of React, Android, or iOS development, these are valuable topics of study for the aspiring React Native developer. Where sensible, we have linked to resources and articles that go more in depth."
    return (
      <div className={styles.tooltip}>        
        {content}
      </div>
    )
  }

  export default function MyApp() {
    return <MyTooltip />
  }