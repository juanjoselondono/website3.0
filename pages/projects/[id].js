import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
import Software from '@/components/templates/software'
import Render from '@/components/templates/render'
import Loader from '@/components/Loader' 
const Project = () => {
  const [project, setProject] = useState()
  var router = useRouter()
  var _id = router.query.id
  const projectsURL = "/api/projects"
  function filterProject(project){
    return project.filter(element =>element._id == _id)
  }
  function getProjects(){
    return new Promise((resolve, reject)=>{
        axios
        .get(projectsURL)
        .then((data)=>{
            var sortedArray = filterProject(data.data)
            setProject(sortedArray[0])
            if(sortedArray[0] != undefined){
              setProject(sortedArray[0])
            }
            console.log(sortedArray)
            resolve()
        })
    })
  }
  useEffect(()=>{
    getProjects()
  }, [_id])
  return(
    <div>
      {
        project != undefined && project.category == 'software' &&
        <Software data = {project}></Software>
      }
      {
        project != undefined && project.category == 'render' && 
        <Render data = {project}></Render>
      }
      {
        project == undefined &&
        <Loader></Loader>
      }
    </div>
  )
}
        
export default Project