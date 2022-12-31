import React from 'react'
import styles from './styles.module.css'
import Title from '@/components/decorative/coolTitle/coolTitle'
const software = ({data}) => {
  return (
    <div className = {styles.container}>
      <div className={styles.titleContainer}>
        <Title className={styles.title} title = {data.name.toUpperCase()}fontSize= "3.5rem"></Title>
      </div>
      <div className = {styles.infoContainer}>
        <div className={styles.image}>
          <a href={data.content.link_url}><img src= {data.Images.wallpaper} className = {styles.wallpaper}></img></a>
        </div>
        <div className = {styles.content}>
          <p className={styles.description}>
            {data.content.description}
          </p>
          <p>Website Link:</p>
          <a href={data.content.link_url} className={styles.url}>{data.content.link_url}</a>
          <p style={{marginTop:'5%'}}>Github Repo</p>
          <a href={data.content.github_repo_url} className={styles.url}>{data.content.github_repo_url}</a>
        </div>
      </div>
    </div>
  )
}

export default software