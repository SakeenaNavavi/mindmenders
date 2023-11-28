import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const AddQuizzes = () => {
  const modal=()=>{
    alert('Your answers have been sent for review to the relevant consultant! Will get back to you soon!');
  }
  const numCards = 10;
  const cards = [];
  const stressSentences = [
    "I often feel overwhelmed by the demands of daily life.",
    "I have experienced withdrawal symptoms when attempting to cut down or stop my substance use.",
    "I find it challenging to relax and unwind after a long day.",
    "I frequently experience physical symptoms of stress (e.g., headaches, tension).",
    "I often feel anxious about the future.",
    "I have trouble sleeping due to stress.",
    "I feel pressure to meet others' expectations.",
    "I struggle to find time for self-care activities.",
    "I have difficulty concentrating due to stress.",
    "I often feel irritable or moody.",
  ];

  for (let i = 1; i <= numCards; i++) {
    
    const radioGroupName = `flexRadioDefault${i}`;
    cards.push(
      <div key={i} className="d-flex justify-content-center vh-20" style={{ padding: '10px' }}>
        <div className="quiz-card card custom-card custom-card-width">
          <div className="quiz-card-body">
            <p className="quiz-card-text">
            {stressSentences[i - 1]}
              <div className="form-check form-check-inline">
                <input type="radio" name={radioGroupName} id={`disagree${i}`} className="form-check-input" />
                <label htmlFor={`disagree${i}`} className="form-check-label" >
                  Disagree
                </label>
    
                <input type="radio" name={radioGroupName} id={`stronglyDisagree${i}`} className="form-check-input" />
                <label htmlFor={`stronglyDisagree${i}`} className="form-check-label" >
                  Strongly Disagree
                </label>
    
                <input type="radio" name={radioGroupName} id={`agree${i}`} className="form-check-input" />
                <label htmlFor={`agree${i}`} className="form-check-label" >
                  Agree
                </label>
    
                <input type="radio" name={radioGroupName} id={`stronglyAgree${i}`} className="form-check-input" />
                <label htmlFor={`stronglyAgree${i}`} className="form-check-label">
                  Strongly Agree
                </label>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="button-box">
      <div className="padded-card">
        {cards}
      </div>
      <div className="but-box">
        <div className="goback-button-container">
          <button className="goback-button">
            <Link to="/quizzes" className="custom-link">
              Go Back
            </Link>
          </button>
        </div>
        <div className="submit-button-container">
          <button className="submit-button" onClick={modal}>Submit Quizz</button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
    
    
  );
};

export default AddQuizzes;