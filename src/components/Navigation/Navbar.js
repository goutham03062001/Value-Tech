import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navBarBackground fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#!">Xenicx</a>
    <button className="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav innerNavBar">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#!">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Features</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="#!">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar