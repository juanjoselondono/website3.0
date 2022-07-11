import React from 'react'
import styles from './styles.module.css'
const navbar = () => {
  return (
    <nav className = {styles} className="navbar bg-transparent navbar-dark navbar-light navbar-expand-lg">
      <a className="navbar-brand" href="/">Juan José Londoño David</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar