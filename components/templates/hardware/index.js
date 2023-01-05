import React from 'react'
import styles from './styles.module.css'
import Title from '@/components/decorative/coolTitle/coolTitle'
import Carousel from 'react-bootstrap/Carousel';
const render = ({data}) => {
  return (
    <div className = {styles.container}>
    <div className={styles.titleContainer} style ={{backgroundImage:`url(${data.Images.wallpaper})`,backgroundRepeat: 'no-repeat', backgroundPosition:'center center'}}>
      <Title className={styles.title} title = {data.name.toUpperCase()}fontSize= "3.5rem"></Title>
    </div>
    <p className={styles.description}>{data.content.description}</p>
    { 
        data.Images.gallery[0] != undefined &&
        <Carousel>
        {data.Images.gallery.map((element) => (
            <Carousel.Item key = {element+2}interval={3000}>
            <img
                className={styles.carouselImages}
                src={element}
                alt="Slider Image"
                key = {element+1}
            />
            </Carousel.Item> 
        ))}
        </Carousel>
    }
    <div className={styles.specsContainer}>
      <ul style={{listStyle: 'square'}}>
        <h2 style = {{textAlign:'center', color:'white', fontSize:'2.2rem', fontWeight:'600'}}>Specs: </h2>
        {
          data.content.specifications.map((spec)=>(
            <li className={styles.spec} key = {spec+1} >{spec}</li>
          ))
        }
      </ul>
      <iframe className={styles.video} src = {data.content.videoEmbed}></iframe>
    </div>
  </div>
  )
}

export default render