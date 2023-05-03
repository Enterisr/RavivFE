import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navnat-dark bg-black">
        <div className="container-fluid">
            <Link className="navbar-brand text-white container" to={'/login'}>
                NBA-PLAYERS-PREDICT
            </Link> 
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">hi
            <span className="navbar-toggler-icon"></span>
            </button>

            <Link className='btn btn-outline-light' to='/signup'>ADD USER</Link>
        </div> 
    </nav>



    </div>

  )
}
