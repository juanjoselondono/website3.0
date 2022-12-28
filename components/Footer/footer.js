import React from 'react'
import {Card, Row, Col}  from 'react-bootstrap'
import styles from './styles.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GitHubIcon from '@mui/icons-material/GitHub';

const footer = () => {
  return (
    <div className={styles.container}>
      <Card body bg="dark">
        <Row className={styles.icons_container}>
          <Col><a  className={styles.col} href='https://www.instagram.com/londono_da/'><InstagramIcon fontSize='large'></InstagramIcon></a></Col>
          <Col><a className={styles.col} href='https://twitter.com/londono_da'><TwitterIcon fontSize='large'></TwitterIcon></a></Col>
          <Col><a className={styles.col} href='https://wa.link/1uykxn'><LocalPhoneIcon fontSize='large'></LocalPhoneIcon></a></Col>
          <Col><a className={styles.col} href='https://github.com/juanjoselondono'><GitHubIcon fontSize='large'></GitHubIcon></a></Col>
          <Col><a className={styles.col} href='https://open.spotify.com/artist/1lBJ8VUYZ0xpTBIkHV93Nx?si=0QvA9iUIQiq6fgpMV5_SmQ'><MusicNoteIcon fontSize='large'></MusicNoteIcon></a></Col>
        </Row>
        <Row>
          <p >juanjoselondonodavid@gmail.com</p>
        </Row>
        <Row>
          <p>+57 3054293966</p>
        </Row>
        <Row className={styles.copyright}>
          <p>©juanlondono2023</p>
        </Row>
      </Card>
    </div>
  )
}
export default footer