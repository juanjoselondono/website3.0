import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'
import styles from './styles.module.css'
import Form from 'react-bootstrap/Form';
import Title from '@/components/decorative/coolTitle/coolTitle'
const projects = () => {
  const [projectList, setProjectList] = useState([])
  const [sort, setSort] = useState()
  const projectsURL = "/api/projects"
  function sortByDateAsc(arr) {
    return arr.sort((a, b) => new Date(b.Date) - new Date(a.Date));
  }
  function sortByDateDesc(arr) {
    return arr.sort((a, b) => new Date(a.Date) - new Date(b.Date));
  }
  function setProjectWrapper(){
    return new Promise((resolve, reject)=>{
        axios
        .get(projectsURL)
        .then((data)=>{
          //showing the first 10 projects for rendering porpouses
            var sortedArray = data.data.reverse().slice(0,10)
            console.log(sortedArray)
            setProjectList(sortByDateAsc(sortedArray))
            resolve()
        })
    })
  }
  
  function sortArrayByName(array) {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  }
  function convertDateToString(date){
    var str_date = new Date(date)
    var concat_date = `${str_date.getDay()}/${str_date.getMonth()}/${str_date.getFullYear()}`
    return concat_date
  }
  function handleSort(){
    if(sort == 1){
      setProjectList(sortByDateAsc(projectList))
      setSort(1)
    }
    else if(sort == 2){
      setProjectList(sortByDateDesc(projectList))
      setSort(2)
    }
    else if (sort == 3){
      setProjectList(sortArrayByName(projectList))
      setSort(3)
    }
  }
  useEffect(()=>{
    setProjectWrapper().then(()=>{
      handleSort()
    })
  }, [sort])
  return (
    <div>
      <Title fontSize = "3rem" title = "PROJECTS"></Title>
      <div style={{marginLeft:'30%', marginRight:'30%', marginTop:'5%'}}>
        <Form.Select bg='dark' aria-label="Default select example"
          as="select"
          value={sort}
          onChange={e => {
            setSort(e.target.value);
          }}
        >
          <option value="1">Sort Newer</option>
          <option value="2">Sort Older</option>
          <option value="3">Sort Alphabetically</option>
        </Form.Select>
      </div>

      <div className={styles.container}>
        {
          projectList.map((element)=>(
            <Link key = {element._id+10} href={`/projects/${element._id}`}>
              <div className = {styles.projectContainer}key ={element._id}>
                <div className={styles.titleContainer}>
                  <h3 className={styles.title} key ={element._id+1}>{element.name}</h3>
                  <p className={styles.projectDate}>{convertDateToString(element.Date)}</p>
                </div>
                <img key = {element._id+4} src={element.Images.wallpaper} className = {styles.img} ></img>
                <p className={styles.description} key = {element._id+2}>{element.content.description}</p>
              </div>
              </Link>
          ))
        }
      </div>
    </div>
  )
}

export default projects