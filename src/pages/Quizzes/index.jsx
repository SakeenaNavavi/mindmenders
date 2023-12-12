import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import supabase from '../../supa/supabase/supabaseClient';

const QuizzesCard = (props) => {
  const { Description } = props;
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <br />
      <div className="box">
        <h5 className="text-box-header">
          {Description}
        </h5>
        <Link to="/add-quizzes">
          <button
            className="qbutton"
            // onClick={() => handleGetStarted(1)} 
          >
            <b> Get Started</b>
          </button>
        </Link>
      </div>
    </div>
  )
}

const Quizzes = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchDatav(); // Fetch initial data when the component mounts
  }, []);

  const fetchDatav = async () => {
    try {
      // Fetch data from Supabase
      const { data, error } = await supabase.from('tblMentalHealthConditions').select('*');
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
      <div>
        {campaigns.map((campaign) => (
          <QuizzesCard
            key={campaign.id}
            Description={campaign.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
