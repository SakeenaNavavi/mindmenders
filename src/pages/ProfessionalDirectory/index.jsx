import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import { Row, Col } from 'react-bootstrap';  
import './index.css';
const DirectoryCard = (props) => {
  const { First_Name, Bio, Location } = props;

  return (
  
    <Col md={4}>
    <div className="directory-card">
      <img src="data:image/jpeg;base64,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" alt="Jane" className="img-fluid directory-card-image" />
      <div className="container">
        <h5 className="directory-card-title">{First_Name}</h5>
        <p className="directory-title">{Bio}</p>
        <p className="directory-title">{Location}</p>
        <p>
          <button className="directory-button-1">
            <Link to="/AppointmentBooking" className="custom-link">
              Book Now
            </Link>
          </button>
        </p>
        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
      </div>
    </div>
    </Col>
    
  );
};

const Directory = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchDatav(); // Fetch initial data when the component mounts
  }, []);

  const fetchDatav = async () => {
    try {
      // Fetch data from Supabase
      const { data, error } = await supabase.from('tblConsultant').select('*');
      if (error) {
        console.error('Error fetching data from Supabase:', error);
      } else {
        setCampaigns(data);
      }
    } catch (error) {
      console.error('Error fetching data from Supabase:', error);
    }
  };

  return (
    <div>
      <Navbar /> <br />
      <div className='container-fluid'>
        <div className='row'>
        {campaigns.map((campaign) => (
          <DirectoryCard
            key={campaign.id}
            First_Name={campaign.First_Name}
            Bio={campaign.Bio}
            Location={campaign.Location}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Directory;
