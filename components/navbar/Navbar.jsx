import Link from 'next/link'
import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
      <Link href='/' className='nav_link'><h1>FreeChat</h1></Link>
      </div>
     
      </div>
    
  )
}

export default Navbar