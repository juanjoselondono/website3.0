import {React, useEffect, useState} from 'react'
import Slider from '@/components/Slider/slider'
import Info from '@/components/mainInfo/mainInfo'
import TechStack from '@/components/techStack/techStack'
import Head from "next/head";
import ProjectsWrap from '@/components/projectsWrap/projectsWrap'
import axios from 'axios'
import Loader from '@/components/Loader' 
const index = () => {
  const [sliderList, setSliderList] = useState()
  const [projects, setProjectList] = useState()
  const projectsURL = "/api/projects"
  const getImagesUrl = '/api/slider'
  function getImages(){
    axios
    .get(getImagesUrl)
    .then((data) => {
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
            resolve()
        })
    })
  }
  useEffect(()=>{
    getImages()
    setProjectWrapper()
  },[])
  return (
    <div>
      {
        sliderList != undefined && projects != undefined &&
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
        sliderList == undefined && projects == undefined &&
        <Loader></Loader>
      }
    </div>
  )
}

export default index