import Navitems from "../../atoms/Navitems";
import logo from './Capture.PNG';
import './index.css';
import { useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import LoginPage from "../../../pages/LoginPage";
const Navbar=()=>
{

    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#70663E"}}>
  <div class="container-fluid">
  <a class="nav-link active" href="/"><img src={logo} alt="logo" width="55" height="55"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ProfessionalDirectory">Find a Therapist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Quizzes">Quizzes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="ResourceLibrary">Resource Library</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="OnlineCommunity">Online Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="AboutUs">About us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search for conditions"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="login-icon" >
        <FontAwesomeIcon icon={faUserCircle} />
      </div></button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4" id="exampleModalLabel">Welcome to MindMenders!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Hello and welcome to MindMenders! To access our exclusive services, tailored specifically for registered users,<br/> kindly proceed by:
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={LoginPage}>Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</nav>

</div>        
    )
}
export default Navbar;