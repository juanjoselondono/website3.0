import Carousel from 'react-bootstrap/Carousel';
import styles from './styles.module.css'
import Image from 'next/image'
function IndividualIntervalsExample(props) {
  return (
    <Carousel>
      {props.slider.map((element) => (
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