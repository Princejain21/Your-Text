
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.send} bg-${props.send}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" >{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/form">Text analyser</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">about</Link>
            </li>   
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
          <div id='radio' style={{color:props.fontColor}}>
            <input type="button"   onClick={props.value1}  className='theme' id="option1" autoComplete="off" style={{backgroundColor:'red'}} /> Red 
            <input type="button"   onClick={props.value2} className='theme'  id="option2" autoComplete="off" style={{backgroundColor:'yellow'}}/>yellow
            <input type="button"    onClick={props.value3}   className='theme' id="option3" autoComplete="off" style={{backgroundColor:'green'}}/> green
          </div> 


        <div className={`form-check form-switch text-${props.mode}`} style={{ position: 'relative', right: "30px" }}>
          <input type="checkbox" onClick={props.toggleMode} className="form-control-input" id="toggleSwitch" />
          <label className="form-control-label" htmlFor="customSwitches">enable dark</label>
        </div>


      </div>
    </nav>
  )
}
