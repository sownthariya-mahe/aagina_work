import React from "react";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >Aagina_Project</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-white" id="navbarNav">
            <ul className="navbar-nav">


              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" >Table</Link>
              </li>
              <li className="nav-item">
                <Link to='/form' className="nav-link active" aria-current="page" >Form</Link>
              </li>


            </ul>
            <form class="d-flex " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}



