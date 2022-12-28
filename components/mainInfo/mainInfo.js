import React from 'react'
import {Card} from 'react-bootstrap'
import styles from './styles.module.css'
const mainInfo = () => {
  return (
    <Card className={styles.card}>
        <Card.Body className={styles.card_body}>
            <Card.Img className={styles.profilePhoto} variant="left" src="/assets/images/profile.jpg" />
            <div className={styles.infoContainer}>
                <Card.Title className={styles.hello}>Hello! I am Juan Londoño</Card.Title>
                <Card.Text>
                    I am a colombian mechatronic engineering student at <a className={styles.link} href='https://www.eia.edu.co/'>Universidad EIA</a> who loves to share Ideas with others. Send me your ideas and thoughts to juanjoselondonodavid@gmail.com.
                </Card.Text>
                <Card.Text className={styles.spotify}>
                        I also enjoy music considerably. Check out my <a className={styles.link} href='https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ'>Spotify Profile</a> where I publish some of my songs
                </Card.Text>
            </div>
            
        </Card.Body>
    </Card>
  )
}

export default mainInfo