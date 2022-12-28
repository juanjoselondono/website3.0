import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import uploadImage from '@/components/firebase/uploadImage.js'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

const render = ({name}) => {
    const [percent, setPercent] = useState(0);
    const project_name = name
    const [wallpaperUrl, setWallPaperUrl] = useState('')
    const [description, setDescription] = useState('')
    const [githubRepoURL, setGithubRepoURL ] = useState('')
    const[linkURL, setLinkURL] = useState()
    const baseURL = "/api/projects/upload"
    async function handleChange(event) {
        var image = event.target.files[0]
        await uploadImage(image, setPercent,`projects/${project_name}/wallpaper`, setWallPaperUrl)
    }
    //create axios Function to request API Mongo DB
    async function createProject(){
      var timestamp = Date.now()
      var dateformat = new Date(timestamp)
        var project = {  
            name: project_name,
            category: 'software',
            Images: {
                wallpaper: wallpaperUrl,
            }, 
            Date: dateformat,
            content: {
                description: description,
                link_url: linkURL,
                github_repo_url: githubRepoURL
            }

        }
        console.log(project)
        await axios
        .post(baseURL, project)
        .then((response) => {
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
    <Form.Group className="mb-3">
      <Form.Label>Descripción</Form.Label>
      <Form.Control onChange = {(e)=>{setDescription(e.target.value)}} as="textarea" rows={3} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Github Repo Link</Form.Label>
      <Form.Control onChange = {(e)=>{setGithubRepoURL(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Project Link</Form.Label>
      <Form.Control onChange = {(e)=>{setLinkURL(e.target.value)}}/>
    </Form.Group>
    <Button onClick={() => createProject()}>crear</Button>
  </div>
  )
}

export default render