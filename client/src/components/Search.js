import React from 'react';
import '../css/Search.css';

function Search() {
    
  return (
    <>
        <form class="row g-3">
            <div class="col-auto">
                <input class="form-control me-2" type="username" placeholder="Username" aria-label="username"/>
            </div>
            <div class="col-auto">
                <input class="form-control me-2" type="email" placeholder="Email" aria-label="email"/>
            </div>
            <div class="col-auto">
                <input class="form-control me-2" type="number" placeholder="Level" aria-label="level"/>
            </div>
            <div class="col-auto">
                <input class="form-control me-2" type="number" placeholder="Exp" aria-label="exp"/>
            </div>
            <div class="col-2">
                <button class="btn btn-outline-success button-search" type="submit">Search</button>
            </div>

        </form>
        
    </>
  )
}

export default Search