import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from "../../Components/molecules/Navbar/index.jsx";

const DirectoryCard = (props) => {
  const { First_Name, Bio, Location } = props;

  return (
    <div>
      <Navbar />
    <div className="directory-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO_7kELk3OrVtkErraastLx2EX3mGwtHTnj8DfbGv8beCNOWKxDx_HaYnC0tbJsYclCQ&usqp=CAU" alt="Jane" className="img-fluid directory-card-image" />
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
    </div>
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
      
      <div >
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
  );
};

export default Directory;
