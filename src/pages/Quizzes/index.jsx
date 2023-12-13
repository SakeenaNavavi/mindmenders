import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import supabase from '../../supa/supabase/supabaseClient';

const QuizzesCard = (props) => {
  const { Questionnaire_id, Questionnaire_type, handleGetStarted } = props;

  return (
    <div>
      <br /> 
      <h1 className="h1">Mind Matters: Mental Health Quizzes</h1>
      <div className="box">
        <h5 className="text-box-header">
          01. Depression, a mental health challenge, brings persistent sadness and a loss of interest, impacting daily life. Don't face it alone; let's explore and discuss with empathy and understanding.
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
          <button
            className="qbutton"
            onClick={() => handleGetStarted("ec424c43-ebf8-40e5-8468-00d899531e1b")}
          >
            <b> Get Started</b>
          </button>
        </Link>
      
      </div>
      
      <br />
      
      <div div className="box">
       
      
        <h5 className="text-box-header" >
          02.Stress is a common response to life's challenges, affecting well-being. We can explore this experience and emotional health together through quizzes, promoting understanding and support.
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("4a07d269-5805-48a2-810d-64225f792dd0")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />
      
      <div div className="box">
        
      
        <h5 className="text-box-header" >
          03.Insomnia, a sleep disorder causing difficulty in falling or staying asleep, can affect emotional well-being. If you've faced insomnia, let's explore solutions and take a Insomnia quiz together for better understanding and support.
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("00dc0cb1-a8a3-4461-ae05-cd0a73abb0fc")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          04.Overthinking, a common mental habit involving excessive analysis, can impact emotional well-being. If you've been caught in overthinking, let's explore strategies and take a Overthinking quiz together to enhance understanding and support.
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("bdaa10be-41d0-4011-bacd-5bf665daf0b5")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header">
          05.Addictions, compulsive behaviors disrupting daily life, can challenge mental well-being. If you're struggling with addictions, let's have a conversation. Are you ready to take a Addictions quiz, exploring emotional well-being together?
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("b47dca85-27da-4b7d-942f-ff1c42699bd3")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          06.Eating disorders, characterized by unhealthy eating behaviors, can impact emotional well-being. If you're dealing with eating disorders, let's have a conversation. Are you interested in taking a eating disorders quiz to explore emotional well-being together?
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("070b27c2-67d6-40aa-80de-431e9fa17413")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          07.Bipolar and mood disorders, characterized by extreme mood swings, can impact emotional well-being. If you're experiencing these challenges, let's connect. Are you ready to take a Bipolar and Other mood disoders quiz, exploring emotional well-being together?
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("fdef01d4-2439-4579-bbc2-efeee14e66cf")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
      
      
        <h5 className="text-box-header" >
          08.Phobias, marked by intense irrational fears, can affect emotional well-being. If you're struggling with phobias, let's have a conversation. Are you ready for a phobias quiz, exploring emotional well-being together?
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
        <button
      className="qbutton"
      onClick={() => handleGetStarted("86a4c59e-fa6b-45b4-9948-53c1022e38f8")}
    >
      <b> Get Started</b>
    </button>
</Link>
      </div>

      <br />

      <div div className="box">
        <h5 className="text-box-header" >
  09.ADHD, characterized by focus and impulsivity challenges, can impact emotional well-being. If you're living with ADHD, let's share experiences. Are you ready to take ADH quiz, exploring emotional well-being together?
</h5>
<Link to={`/add-quizzes/${Questionnaire_id}`}>
<button
      className="qbutton"
      onClick={() => handleGetStarted("fdce4ed6-2a62-4d48-83a7-de0aad851250")}
    >
      <b> Get Started</b>
    </button>
</Link >
      </div>

      <br />
      <div div className="box">
      <h5 className="text-box-header" >
     10. Anxiety, a common mental health challenge, can significantly impact emotional well-being. If you're dealing with anxiety and seeking support, let's start a conversation. Are you ready to take an anxiety quiz and explore your emotional well-being together?
</h5>
<Link to="/add-quizzes">
<button
      className="qbutton"
      onClick={() => handleGetStarted()}
    >
      <b> Get Started</b>
    </button>
  
</Link>
      </div>
      <div className="box">
        <h5 className="text-box-header">
          {Questionnaire_type}
        </h5>
        <Link to={`/add-quizzes/${Questionnaire_id}`}>
          <button
            className="qbutton"
            onClick={() => handleGetStarted("0ecd9efb-8893-4fa6-b466-dff079899c2f")}
          >
            <b> Get Started</b>
          </button>
        </Link>
      </div>
      <br /> <br /> <br />
    </div>

    
  );
}

const Quizzes = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDatav(); // Fetch initial data when the component mounts
  }, []);

  const fetchDatav = async () => {
    try {
      // Fetch data from Supabase
      const { data, error } = await supabase.from('tblQuestionnaire').select('*');
      if (error) {
        console.error('Error fetching data from Supabase:', error);
      } else {
        setCampaigns(data);
      }
    } catch (error) {
      console.error('Error fetching data from Supabase:', error);
    }
  };

  const handleGetStarted = (Questionnaire_id) => {
    navigate(`/add-quizzes/${Questionnaire_id}`);
  };

  return (
    <div>
      <Navbar />
      <br />
      <div>
        {campaigns.map((campaign, index) => (
          <QuizzesCard
            key={index}
            Questionnaire_id={campaign.Questionnaire_id}
            Questionnaire_type={campaign.Questionnaire_type}
            handleGetStarted={handleGetStarted}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Quizzes;
