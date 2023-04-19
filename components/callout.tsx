import styles from './tooltip.module.css'

export function ExTooltip({content}) {      
    return (
      <div className={styles.tooltip}>        
        {content}
      </div>
    )
}