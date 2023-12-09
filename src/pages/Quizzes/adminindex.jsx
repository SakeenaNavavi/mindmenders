import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adminindex.css';
import { createClient } from '@supabase/supabase-js';
//import Navbar from '../../Components/molecules/Navbar/index.jsx';

const supabaseUrl = 'https://brxyhorsxcsfbiivubin.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeHlob3JzeGNzZmJpaXZ1YmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNjAyMTQsImV4cCI6MjAxNDczNjIxNH0._RS1Z6BydY99zFyVtseR1HKH_KNVSOU1IsPj7i019l0';
const supabase = createClient(supabaseUrl, supabaseKey);

const AdminQuizzes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: '',
    condition: '',
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can save the entered data or perform any other necessary actions
    console.log('Submitted Data:', formData);
    setSubmittedData([...submittedData, formData]);
    setFormData({
      description: '',
      condition: '',
    });
  };

  const handleGetStarted = (Questionnaire_id) => {
    navigate(`/add-quizzes/${Questionnaire_id}`);
  };

  return (
    <div>
     
      <br />
      <h1 className="h1">Mind Matters: Mental Health Quizzes</h1>

      {/* Display submitted data in separate cards */}
      {submittedData.map((data, index) => (
        <div key={index} className="box-adminquizzes">
           {data.description} <br/>
           {data.condition}
          <Link to="/add-quizzes">
        <button className="button-adminquizzes" onClick={() => handleGetStarted(1)}>
          <b>Add Quizzes</b>
        </button>
      </Link>
        </div>
      ))}

      {/* Add a form with description and condition inputs */}
      <form className="adminquizzesform" onSubmit={handleFormSubmit}>
        <label className="adminquizzesformlabel" htmlFor="description">Condition Type:</label>
        <input className="adminquizzesforminput"
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleInputChange}
        />
        <br />
        <label  className="adminquizzesformlabel" htmlFor="condition">Description:</label>
        <input className="adminquizzesforminput"
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <br />
        <button className="Add-button-adminquizzes" type="Add">Add</button>
      </form>
<br /> <br />
      {/* Link to add more quizzes */}
     
    </div>
  );
};

export default AdminQuizzes;
