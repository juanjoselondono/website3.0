import React from 'react'

const notFound = () => {
  return (
    <div style = {{marginTop:'10%', marginBottom:'50%', display:'flex', flexDirection:'column', justifyItems:'center', alignItems:'center'}}>
        <h1 style={{textAlign:'center', color:'white', fontSize:'3rem'}}>404 Not found</h1>
        <img src = "/assets/images/404Astro.png"></img>
    </div>
  )
}

export default notFound