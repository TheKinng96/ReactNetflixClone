import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  },[])

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

      <img className="nav-avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Netflix Avatar Logo" />
    </div>
  )
}

export default Nav;