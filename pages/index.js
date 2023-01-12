import {React, useEffect, useState} from 'react'
import Slider from '@/components/Slider/slider'
import Info from '@/components/mainInfo/mainInfo'
import TechStack from '@/components/techStack/techStack'
import Head from "next/head";
import ProjectsWrap from '@/components/projectsWrap/projectsWrap'
import axios from 'axios'
import Loader from '@/components/Loader' 
function sortByDateAsc(arr) {
  return arr.sort((a, b) => new Date(b.Date) - new Date(a.Date));
}
async function getContent(){
  const ApiUrl = 'https://thejuanlondono.vercel.app/api/projects'
  return new Promise((resolve, reject)=>{
      axios.get(ApiUrl, {
        headers:{ "Accept-Encoding": "gzip,deflate,compress" } 
      }).then((response) => {
          console.log(response)
          resolve(sortByDateAsc(response.data).slice(0,3))
      });
  })
}
async function getSlider(){
  const ApiUrl = 'https://thejuanlondono.vercel.app/api/slider'
  return new Promise((resolve, reject)=>{
      axios.get(ApiUrl, {
        headers:{ "Accept-Encoding": "gzip,deflate,compress" } 
      }).then((response) => {
          console.log(response)
          resolve(response.data)
      });
  })
}
export const getServerSideProps = async()=>{
  const res = await getContent()
  const slider = await getSlider()
  return {
      props:{
          projects: res,
          sliderList: slider
      }
  }
}
const index = ({projects, sliderList}) => {
  const projectsURL = "/api/projects"
  const getImagesUrl = '/api/slider'
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