import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'components/Navbar/navbar'
import Script from "next/script";
import {useEffect, useState} from 'react'
import '../styles/globals.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import data from "../particles"
import Footer  from "components/Footer/footer";
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return (
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          sx = {{position:'fixed'}}
          options={data}
        />
        <div className="content">
          <Navbar></Navbar>
          <Component testProp= "hello"  {...pageProps} />
          {router.pathname !== '/panel' && <Footer></Footer>}
        </div>
        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></Script>
      </div>
    )
}

export default MyApp
