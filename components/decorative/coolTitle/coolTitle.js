import React from 'react'
import styles from './styles.module.css'
const index = (props) => {
  return (
    <div className={styles.title_container}>
      <div className={styles.title} style = {{fontSize:props.fontSize}}>{props.title}</div>
    </div>
  )
}

export default index