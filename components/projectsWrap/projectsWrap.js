import React from 'react'
import styles from './styles.module.css'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import {useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from 'react-bootstrap/Spinner';
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
      {
        projectList == [] &&
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      }
      {
        projectList !=[] &&
        <div>
        <Title className={styles.title} title = "Checkout some of my projects" fontSize= "2rem"></Title>
        <Carousel className={styles.container} slide={false}> 
            {projectList.map((element) => (
              <Carousel.Item key = {element.name+2}interval={4000}>
                <a key = {element.name+12} href = {`projects/${element._id}`}>
                  <img
                  className={styles.image}
                  src={element.Images.wallpaper}
                  alt={element.name}
                  key = {element.name+1}
                  />
                  </a>
                  <Carousel.Caption key ={element.name+2}>
                      <p className={styles.caption} key = {element.name+3}>{element.name}</p>
                  </Carousel.Caption>
              </Carousel.Item>
            ))}
            </Carousel>
          </div>
      }
    </div>
  )
}

export default projectsWrap