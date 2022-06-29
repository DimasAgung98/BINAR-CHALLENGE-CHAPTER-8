// IMPORT REACT 
import React from 'react';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a href='/' class="navbar-brand mb-0 h1">GROUP 3</a>
          <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar;