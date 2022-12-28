import {React} from 'react'
import styles from '../styles/Home.module.css'
import Slider from '@/components/Slider/slider'
import Info from '@/components/mainInfo/mainInfo'
import TechStack from '@/components/techStack/techStack'
import Head from "next/head";
import ProjectsWrap from '@/components/projectsWrap/projectsWrap'
const index = (props) => {
  return (
    <div>
      <h1 className={styles.color}>
        <Head>
          <title>Juan José Londoño David</title>
          <meta name="title" content="Juan José Londoño David"></meta>
          <meta name="description" content="Estudiante ingenieria mecatronica eia, músico casual y DIY maker"></meta>
        </Head>
        <Slider></Slider>
        <Info></Info>
        <ProjectsWrap></ProjectsWrap>
        <TechStack></TechStack>
      </h1>
    </div>
  )
}

export default index