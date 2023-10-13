import Navitems from "../../atoms/Navitems";
const Navbar=()=>
{
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#70663E"}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="ProfessionalDirectory">Find a Therapist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="AboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="Quizzes">Quizzes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="ResourceLibrary">Resource Library</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="OnlineCommunity">Online Community</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search for conditions"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>        
    )
}
export default Navbar;