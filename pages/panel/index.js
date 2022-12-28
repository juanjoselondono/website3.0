import React from 'react'
import {useState} from 'react'
import Form from '@/components/Form/form'
import CreateProject from '@/components/createProject/createProject'
import DeleteProject from '@/components/deleteProject/deleteProject'
import ModifySlider from '@/components/modifySlider/modifySlider'
const index = () => {
  const [token, setToken] = useState();
  //change this to false work faster
  //if(!token){...}
  if(!token){
    return (
        <div>
            <Form setToken = {setToken}></Form>
        </div>
      )
  }
  else{
    return(
        <div>
            <h1 style = {{color:'white', textAlign:'center'}}>Welcome to admin panel mr JLD</h1>
            <div  style= {{marginTop:'10%',display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginBottom:'20%', gap:'5vh'}}>
              <CreateProject/>
              <DeleteProject/>
              <ModifySlider/>
            </div>           
        </div>
    )
  }

}

export default index