import './index.css';
import { Link } from 'react-router-dom';

const directory=()=>
{
    return (           
        <div>
            <div className="heading-container">
          <h3 className="h3">FIND YOUR THERAPIST</h3>
            <p className="para">Discover Our Distinguished Network of Dedicated Mental Health Professionals</p>
            </div>
        <div class="row row-cols-1 row-cols-md-5 g-4">
            <div class="column">
                <div class="directory-card">
                    <img src="https://nawinna.com/assets/images/doctor/100/187-untitled-1.jpg" alt="Jane" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://med.pdn.ac.lk/departments/psychiatry/staff/pabasari.png" alt="Mike" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Mike Ross</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://modernfamilymedicalcentre.com/wp-content/uploads/2021/11/Dr.-Lakshmi-Saranya-Marath-Thozhiyoor.jpg" alt="John" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. John Doe</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJmvF525gIJbdRibhaIkVa4DW-uov2z12Zg&usqp=CAU" alt="Jane" class="directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://almashospital.com/public/storage/doctor/of77Cr3c8q1asar5654DnHpSgew433FuEKVuzXFcX7.jpg" alt="Jane" class="directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://www.prshospital.com/img/doctors/advika_sivam_narayan.jpg" alt="Jane" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="data:image/jpeg;base64,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" alt="Jane" class="directory-card-image"></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://kalyanasl.org/wp-content/uploads/2022/05/IMG_20220527_150639_240-Leila-A.-Tennakoon.jpg" alt="Jane" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://www.mayoclinic.org/-/media/kcms/employees/2018/10/28/15/50/eva-alden-20982127.jpg" alt="Jane" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
                    <img src="https://photos.psychologytoday.com/353d8520-c394-4b99-ae48-b95ee3066d46/2/320x400.jpeg" alt="Jane" class="directory-card-image" ></img>
                    <div class="container">
                        <h5 class="directory-card-title">Dr. Rumi Ruben</h5>
                        <p class="directory-title">Psychiatrist</p>
                        <p><button class="directory-button-1">Book Now</button></p>
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
export default directory;