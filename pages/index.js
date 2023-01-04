import {React, useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import Slider from '@/components/Slider/slider'
import Info from '@/components/mainInfo/mainInfo'
import TechStack from '@/components/techStack/techStack'
import Head from "next/head";
import ProjectsWrap from '@/components/projectsWrap/projectsWrap'
import axios from 'axios'

const index = () => {
  const [sliderList, setSliderList] = useState([])
  const [projects, setProjectList] = useState([])
  const projectsURL = "/api/projects"
  const getImagesUrl = '/api/slider'
  function getImages(){
    axios
    .get(getImagesUrl)
    .then((data) => {
      console.log(data.data)
      setSliderList(data.data)
    })
  }
  function setProjectWrapper(){
    return new Promise((resolve, reject)=>{
        axios
        .get(projectsURL)
        .then((data)=>{
            var sortedArray = data.data.reverse().slice(0,3)
            setProjectList(sortedArray)
            console.log(sortedArray)
            resolve()
        })
    })
  }
  useEffect(()=>{
    setProjectWrapper()
    getImages()
  },[])
  return (
    <div>
      {
        projects !=[] && sliderList !=[] &&
        <div>
          <Head>
            <title>Juan José Londoño David</title>
            <meta name="title" content="Juan José Londoño David"></meta>
            <meta name="description" content="Estudiante ingenieria mecatronica eia, músico casual y DIY maker"></meta>
          </Head>
          <Slider slider = {sliderList}></Slider>
          <Info></Info>
          <ProjectsWrap projectList = {projects}></ProjectsWrap>
          <TechStack></TechStack>
        </div>
      }
      {
        projects ==[] && sliderList ==[] &&
        <h3 styles = {{color:'white',textAlign:'center'}}>Loading ...</h3>
      }
    </div>
  )
}

export default index