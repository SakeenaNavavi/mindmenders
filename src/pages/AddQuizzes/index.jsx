import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const AddQuizzes = () => {
  const numCards = 10;
  const cards = [];

  for (let i = 1; i <= numCards; i++) {
    
    const radioGroupName = `flexRadioDefault${i}`;
    cards.push(
      <div key={i} className="d-flex justify-content-center vh-20" style={{ padding: '10px' }}>
        <div className="quiz-card card custom-card custom-card-width">
          <div className="quiz-card-body">
            <p className="quiz-card-text">
              {i}. You can customize this text to make each card unique. <br />
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
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddQuizzes;
