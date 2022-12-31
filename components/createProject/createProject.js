import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Render from '@/components/formTemplates/render.js'
import Software from '@/components/formTemplates/software.js'

function create() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [plantilla, setPlantilla] = useState('');
  const[projectName, setProjectName] = useState('')
  // async function crearProyecto(){
  //   const config = {
  //     headers: { 'content-type': 'multipart/form-data' },
  //     onUploadProgress: (event) => {
  //       console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  //     },
  //   };
  //   if(plantilla == 5){
  //     console.log(wallpaperImage)
  //     const response = await axios.post('/api/projects/uploadImage', wallpaperImage, config);
  //     console.log('response', response.data);
  //   }
  // }

  return (
    <>
      <Button variant="primary" style = {{justifySelf:'center', alignSelf:'center', textAlign:'center'}} onClick={handleShow}>
        Crear Nuevo Proyecto
      </Button>
      <Modal show={show} onHide={handleClose} keyboard = {false}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group
          className="mb-3"
          controlId="projectName"
          value={projectName}
          onChange={e => {
            setProjectName(e.target.value);
          }}
        >
            <Form.Label>Nombre Proyecto</Form.Label>
            <Form.Control placeholder="proyecto x" />
        </Form.Group>
          <div>
            <p>Seleccionar plantilla</p>
            <Form.Select
              aria-label="Default select example"
              as="select"
              value={plantilla}
              onChange={e => {
                setPlantilla(e.target.value);
              }}
            >
              <option>Open this select menu</option>
              <option value="1">Software</option>
              <option value="2">University Project</option>
              <option value="3">Hardware</option>
              <option value="4">Presentation</option>
              <option value="5">Render</option>
            </Form.Select>
          </div>
        <div className='projectForm' style = {{margin:'10px'}}>
              {/* Software */}
              {
                plantilla == 1 &&
                <Software name = {projectName}></Software>
              }
              {/* University Project */}
              {
                plantilla == 2 &&
                <p>Hello</p>
              }
              {/*Hardware*/}
              {
                plantilla == 3 &&
                <p>Hello world</p>
              }
              {/* Presentation */}
              {
                plantilla == 4 &&
                <p>Hello world</p>
              }
              {/* Render */}
              {
               plantilla == 5 &&
                <Render name ={projectName}></Render>
              }
        </div>

        </Modal.Body>

      </Modal>
    </>
  );
}
export default create