import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import deleteFolder from '@/components/firebase/deleteFolder.js'
function create() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getAllProjectUrl = '/api/projects'
  const deleteProjectUrl = '/api/projects/delete'
  const [selectedProject, setSelectedProject] = useState('')
  var [projects, setProjects] = useState([])

  async function getProjects (){
    await axios
    .get(getAllProjectUrl)
    .then((response) => {
      console.log(response.data);
      setProjects(response.data)
    });
  }
  async function deleteProject(project){
    if(!project._id){
        alert('Proyecto NO seleccionado!')
    }
    else{
        console.log(project._id)
        var target = {
            target: project._id,
        }
        await axios
        .post(deleteProjectUrl, target)
        .then((response) => {
          console.log(response.data);
        })
        await deleteFolder(`projects/${project.name}`)
        .then((response)=>{
          alert(response)
        })
    }
  }
  return (
    <>
      <Button variant="danger" style = {{justifySelf:'center', alignSelf:'center', textAlign:'center'}} onClick={()=>{handleShow(); getProjects()}}>
        Eliminar Proyecto existente
      </Button>
      <Modal show={show} onHide={handleClose} keyboard = {false}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ol>
                {projects.map((element) => (
                    <li key = {element._id}>
                        <Button onClick={()=>{setSelectedProject(element)}} style = {{backgroundColor:'transparent', border:'none', color:'black'}} key = {element.name}>{element.name}</Button>
                    </li>
                ))}
            </ol>
            <Button onClick={() => deleteProject(selectedProject)}>Eliminar</Button>
        </Modal.Body>
      </Modal>

    </>
  );
}
export default create