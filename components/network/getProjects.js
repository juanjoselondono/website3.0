const projectsURL = "/api/projects"
import axios from 'axios'
function getProjects(setState){
  return new Promise((resolve, reject)=>{
      axios
      .get(projectsURL)
      .then((data)=>{
          resolve(data.data)
          setState(data.data)
      })
      .catch((err)=>{
        console.log(err)
        reject()
      })
  })
}
export default getProjects