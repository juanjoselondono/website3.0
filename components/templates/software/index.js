import React from 'react'
import styles from './styles.module.css'
import Title from '@/components/decorative/coolTitle/coolTitle'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const software = ({data}) => {
  return (
    <div className = {styles.container}>
      <div className={styles.titleContainer}>
        <Title className={styles.title} title = {data.name.toUpperCase()}fontSize= "3.5rem"></Title>
      </div>
      <div className = {styles.infoContainer}>
      <div className = {styles.content}>
          <p className={styles.description}>
            {data.content.description}
          </p>
          <a href={data.content.link_url} style = {{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center', alignItems:'center', justifyItems:'center'}}>
            <LanguageIcon fontSize='large'></LanguageIcon>
            <p style={{alignSelf:'center', marginTop:'5%', marginLeft:'5%'}}> Website Link</p>
          </a>
          <a  href={data.content.github_repo_url}  style = {{display:'flex', flexDirection:'row', justifyContent:'center', alignContent:'center', alignItems:'center', justifyItems:'center'}}>
            <GitHubIcon fontSize='large'></GitHubIcon>
            <p style={{ marginLeft:'5%', marginTop:'5%', textAlign:'center'}}>Github Repo</p>
          </a>
        </div>
        <div className={styles.image}>
          <a href={data.content.link_url}><img src= {data.Images.wallpaper} className = {styles.wallpaper}></img></a>
        </div>
      </div>
    </div>
  )
}

export default software