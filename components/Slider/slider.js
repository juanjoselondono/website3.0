import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
function IndividualIntervalsExample() {
  const [sliderList, setSliderList] = useState([{
    url: '/assets/images/black.png'
  }])
  const getImagesUrl = '/api/slider'
  function getImages(){
    axios
    .get(getImagesUrl)
    .then((data) => {
      console.log(data.data)
      setSliderList(data.data)
    })
  }
  useEffect(()=>{
    getImages()
  },[])
  return (
    <Carousel>
      {sliderList.map((element) => (
        <Carousel.Item key = {element.url+2}interval={3000}>
          <img
            className={styles.image}
            src={element.url}
            alt="Slider Image"
            key = {element.url+1}
          />
        </Carousel.Item>
      ))}
    </Carousel>

  )
}
      
export default IndividualIntervalsExample;