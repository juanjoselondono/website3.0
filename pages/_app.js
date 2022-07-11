import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'components/Navbar/navbar'
import Script from "next/script";
import {useEffect} from 'react'
import '../styles/globals.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import data from "../particles"

function MyApp({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </div>
        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      </div>
    )
}

export default MyApp
