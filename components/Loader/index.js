import React from 'react'
import styles from './loader.module.css'
const index = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center', marginTop:'20%', marginBottom:'80%'}}>
        <img className={styles.image} src = "/assets/images/logo.png"></img>
        <h2 className= {styles.text}>Loading ... This might take a while</h2>
    </div>
  )
}

export default index