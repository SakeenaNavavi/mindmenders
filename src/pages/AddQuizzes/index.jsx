import React from 'react';
import './index.css';
const AddQuizzes = () => {
  // Define the number of cards you want
  const numCards = 10;
  // Create an array to store the cards
  const cards = [];

  for (let i = 1; i <= numCards; i++) {
    cards.push(
      <div key={i} className="d-flex justify-content-left vh-20" style={{ padding: '10px' }}>
      <div className="card custom-card custom-card-width">
          <div className="card-body">
            <p className="card-text">
              {i}. You can customize this text to make each card unique. <br />
              <input type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} className="form-check-input" />
              <label htmlFor={`flexRadioDefault${i}`} className="form-check-label">
                Disagree
              </label> <br />
              <input type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} className="form-check-input" />
              <label htmlFor={`flexRadioDefault${i}`} className="form-check-label">
                Strongly Disagree
              </label> <br />
              <input type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} className="form-check-input" />
              <label htmlFor={`flexRadioDefault${i}`} className="form-check-label">
                Neutral
              </label> <br />
              <input type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} className="form-check-input" />
              <label htmlFor={`flexRadioDefault${i}`} className="form-check-label">
                Agree
              </label> <br />
              <input type="radio" name="flexRadioDefault" id={`flexRadioDefault${i}`} className="form-check-input" />
              <label htmlFor={`flexRadioDefault${i}`} className="form-check-label">
                Strongly Agree
              </label>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div>{cards}</div>;
};

export default AddQuizzes;
