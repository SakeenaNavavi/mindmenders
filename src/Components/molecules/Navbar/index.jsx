import logo from './Capture.PNG';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Conditions', { state: { query: searchQuery } });
  };
  return (

    <div>

      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#70663E" }}>
        <div class="container-fluid">
          <a class="nav-link active" href="/"><img src={logo} alt="logo" width="55" height="55" /></a>
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
                <a class="nav-link" href="AboutUs">About us</a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search for conditions"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>

            <button class="btn btn-user"><Link to="/loginRegister" className="custom-link"><i class="fa fa-user"></i></Link></button>
            <button class="btn btn-user"><Link to="/loginRegister" className="custom-link"><i class="fas fa-sign-out-alt fa-sm fa-fw"></i></Link></button>
          </div>
        </div>
      </nav>

    </div>
  )
}
export default Navbar;