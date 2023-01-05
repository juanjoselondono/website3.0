import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import uploadImage from '@/components/firebase/uploadImage.js'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const hardware = ({name}) => {
    const [percent, setPercent] = useState(0);
    const [percent2, setPercent2] = useState(0);
    const project_name = name
    const [wallpaperUrl, setWallPaperUrl] = useState('')
    const[galleryUrl, setGalleryUrl] = useState([])
    const [description, setDescription] = useState('')
    const[specs, setSpecs] = useState('')
    const[videoLink, setVideoLink] = useState('')
    const galleryUrlCollection = []
    const baseURL = "/api/projects/upload"
    function splitString(input) {
        return input.split(",");
    }
    async function handleChange(event) {
        var image = event.target.files[0]
        await uploadImage(image, setPercent,`projects/${project_name}/wallpaper`, setWallPaperUrl)
      }
      async function handleMultipleImages(e){
        for (var i = 0; i < e.target.files.length; i++) {
          var imageFile = e.target.files[i];
          await uploadImage(imageFile, setPercent2, `projects/${project_name}/gallery`, setGalleryUrl)
          .then((data)=>{
            galleryUrlCollection.push(data)
            setGalleryUrl(galleryUrlCollection)
          })
        }
        console.log(galleryUrlCollection)
    }
    //create axios Function to request API Mongo DB
    async function createProject(){
      var timestamp = Date.now()
      var dateformat = new Date(timestamp)
        var project = {
            name: project_name,
            category: 'hardware',
            Images: {
                wallpaper: wallpaperUrl,
                gallery: galleryUrl
            }, 
            Date: dateformat,
            content: {
                description: description, 
                specifications: specs,
                videoEmbed: videoLink
            }
        }
        console.log(project)
        await axios
        .post(baseURL, project)
        .then((response) => {
          alert('Created')
          console.log(response.data);
        });
    }
  return (
    <div>
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Seleccionar Imagen Wallpaper</Form.Label>
      <Form.Control onChange={handleChange} type="file" />
      <p>{percent} % done</p>
    </Form.Group>
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Galeria Imagenes</Form.Label>
      <Form.Control onChange = {(e)=>{handleMultipleImages(e)}} type="file" multiple />
      <p>{percent2} % done</p>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Descripción</Form.Label>
      <Form.Control onChange = {(e)=>{setDescription(e.target.value)}} as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Specs (divide by comas) example "24v battery, rc controlled, gas powered ..."</Form.Label>
      <Form.Control onChange = {(e)=>{setSpecs(splitString(e.target.value))}} as="textarea" rows={2} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Video Link (make sure the url comes from embed not the normal url)</Form.Label>
      <Form.Control onChange = {(e)=>{setVideoLink(e.target.value)}}/>
    </Form.Group>
    <Button onClick={() => createProject()}>crear</Button>
  </div>
  )
}

export default hardware