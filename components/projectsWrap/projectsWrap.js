import React from 'react'
import styles from './styles.module.css'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '@/components/decorative/coolTitle/coolTitle'
const projectsWrap = () => {
  const projectsURL = "/api/projects"
  const [projectList, setProjectList] = useState([])
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
    AOS.init();
    setProjectWrapper()
  }, [])
  return (
    <div data-aos="fade-up" className={styles.superContainer}>
    <Title className={styles.title} title = "Checkout some of my projects" fontSize= "2rem"></Title>
    <Carousel className={styles.container} slide={false}> 
        {projectList.map((element) => (
        <Carousel.Item key = {element.name+2}interval={4000}>
            <img
            className={styles.image}
            src={element.Images.wallpaper}
            alt={element.name}
            key = {element.name+1}
            />
            <Carousel.Caption key ={element.name+2}>
                <p className={styles.caption} key = {element.name+3}>{element.name}</p>
            </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}

export default projectsWrap