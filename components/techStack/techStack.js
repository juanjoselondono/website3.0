import React, {useEffect}from 'react'
import styles from './styles.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoolTitle from '@/components/decorative/coolTitle/coolTitle'
const teckStack = () => {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div  className={styles.container} data-aos="fade-up">
      <CoolTitle title = "Tech Stack" fontSize="5rem"></CoolTitle>
      <div className={styles.stack_container}>
        <img className={styles.icon} alt="c++" src= '/assets/techStack/c.png'></img>
        <img className={styles.icon} alt = "python" src= '/assets/techStack/python.png'></img>
        <img className={styles.icon} alt = "js" src= '/assets/techStack/js.png'></img>
        <img className={styles.icon} alt = "vue" src= '/assets/techStack/vue.png'></img>
        <img className={styles.mediumIcon} alt = "node"src= '/assets/techStack/node.png'></img>
        <img className={styles.icon} alt = "react" src= '/assets/techStack/react.png'></img>
        <img className={styles.mediumIcon} alt="tensorflow"src= '/assets/techStack/next.png'></img>
        <img className={styles.icon} alt="arduino"src= '/assets/techStack/arduino.png'></img>
        <img className={styles.mediumIcon} alt="mongo"src= '/assets/techStack/mongo.png'></img>
      </div>
    </div>
  )
}

export default teckStack