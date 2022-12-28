import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import getSlider from '@/components/firebase/getSlider.js'
import deleteImage from '@/components/firebase/deleteImage.js'
import uploadImage from '@/components/firebase/uploadImage.js'
import axios from 'axios'
function create() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[percent, setPercent] = useState(false)
  var [listURL, setListURL] = useState([])
  const uploadImageUrl = '/api/slider/upload'
  const deleteImageUrl = '/api/slider/delete'
  async function getImages(){
    getSlider().then((data)=>{
      setListURL(data)
    })
  }
  async function handleImageDelete(ref, uri){
    await deleteImage(ref).then(()=>{
      axios
      .post(deleteImageUrl, {target: uri})
      .then(() => {
        getImages()
        console.log('Image Deleted');
      })
    })

  }
  async function handleChange(event) {
    var image = event.target.files[0]
    await uploadImage(image, setPercent,`slider/`)
    .then((uri)=>{
       axios
      .post(uploadImageUrl, {url: uri})
      .then(() => {
        getImages()
        console.log('Image Uploaded');
      })
    })
  }
  useEffect(()=>{
    getImages()
  }, [])
  return (
    <>
      <Button variant="warning" style = {{justifySelf:'center', alignSelf:'center', textAlign:'center'}} onClick={()=>{handleShow()}}>
        Modificar Slider
      </Button>
      <Modal show={show} onHide={handleClose} keyboard = {false}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Slider</Modal.Title>
        </Modal.Header>
        <div style = {{display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', justifyItems:'center', marginTop:'20px'}}>
          <hr></hr>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Subir nueva Imagen </Form.Label>
              <Form.Control onChange={handleChange} type="file" />
              <p>{percent} % done</p>
            </Form.Group>
        </div>
        <Modal.Body>
          <div style = {{display:'flex', flexDirection:'column', gap:'20px', alignContent:'center', alignItems:'center',}}>
            {listURL.map((element) => (
              <div key = {element.uri+2}>
                <img style = {{width:'30vh', height:'auto', justifySelf:'center'}} src = {element.uri} key ={element.uri +1}></img>
                <Button onClick={()=>{
                  handleImageDelete(element.ref, element.uri)
                }} 
                variant="danger" style = {{marginLeft:'10px', fontSize: "2rem"}} key = {element.uri+5}>x</Button>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}
export default create