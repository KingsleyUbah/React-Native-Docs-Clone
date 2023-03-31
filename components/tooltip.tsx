import {useState} from 'react'
import styles from './tooltip.module.css'
import data from '../pages/data'
import {id} from '../pages/basics/getting-started.mdx'

let result = data.filter(item => item.id == id)
console.log(result)

function MyTooltip({content}) {      
    return (
      <div className={styles.tooltip}>        
        {content}
      </div>
    )
  }

  export default function MyApp() {
    return <MyTooltip content={result[0].text}/>
  }