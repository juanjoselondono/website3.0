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
        data.Images.gallery != [] &&
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
  </div>
  )
}

export default render