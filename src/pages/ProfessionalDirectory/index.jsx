import './index.css';
import { Link, redirect } from 'react-router-dom';
import 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supa/supabase/supabaseClient';
import { useEffect,useState } from 'react';

const Directory=()=>
{
  
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // supabase.auth.onAuthStateChange((event, session) => {
    //   if (!session) {
    //     Navigate('/');
    //   }
    // });
    
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    if (!user) {
      redirect('/')
    }

  }, []);
  /*if (!user) {
    return <div>Please log in to access this component.</div>;
  }*/
  

    return (           
        <div>
            <div className="heading-container">
          <h1 className="h1">FIND YOUR THERAPIST</h1>
            <p className="para">Discover Our Distinguished Network of Dedicated Mental Health Professionals</p>
            </div>
        <div class="row row-cols-1 row-cols-md-5 g-4">
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO_7kELk3OrVtkErraastLx2EX3mGwtHTnj8DfbGv8beCNOWKxDx_HaYnC0tbJsYclCQ&usqp=CAU" alt="Jane" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Pradeep Kumara</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Ruhunu Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDBJ7ehh14hO-rjtKPI2HOcLeOIdS5MEzzEmvDBTftlHKhXOlWFHCLSrXzd6Argez4ds&usqp=CAU" alt="Mike" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Mike Ross</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Asiri Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbsIhF-l3Jl-Hj9VmgagPkxSqoIoZNc11VA&usqp=CAU" alt="John" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Malika Pathirana</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Asiri Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJmvF525gIJbdRibhaIkVa4DW-uov2z12Zg&usqp=CAU" alt="Jane" class="img-fluid directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Romesh Sangeeth</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Co-Oparative Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbIycRJsru2GQjKuXngOq2BjPzc56Xr8E0A&usqp=CAU" alt="Jane" class="img-fluid directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Mayura Gamage</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Asiri Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfmJtT9vn994GKj5ycF8p4sNJ2jnlIGaI2w&usqp=CAU" alt="Jane" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Chami Hewage</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Co-Oparative Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQYYXkl_ra75zN5CKDLJUoIFfN57aiJ4Sqw&usqp=CAU" alt="Jane" class="img-fluid directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Sahan Gamage</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Asiri Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Dy_OJYWjJt8E_HN5_AhDSnR_RmJu-sgi4g&usqp=CAU" alt="Jane" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rashmi Hewage</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Ruhunu Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBScVctqO65F3KWl8-YozdNXzAI4kxnW1Jcg&usqp=CAU" alt="Jane" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Ahamed Rafeek</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Asiri Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="directory-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNX9O-H4EHbHJUfubdsVouEuNPAjP624mMg&usqp=CAU" alt="Jane" class="img-fluid directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Panith Nagoda</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p class="directory-title">Co-Oparative Hospital</p>
                        <p><button class="directory-button-1"><Link to="/AppointmentBooking" className="custom-link">
                        Book Now</Link></button></p>
                        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>      
    )
}
export default Directory;