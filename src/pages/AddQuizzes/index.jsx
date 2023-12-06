import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import supabase from "../../supa/supabase/supabaseClient";
import './index.css';

const AddQuizzes = () => {
  const modal = () => {
    alert(
      "Your answers have been sent for review to the relevant consultant! Will get back to you soon!"
    );
  };

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
      <div
        key={i}
        className="d-flex justify-content-center vh-20"
        style={{ padding: "10px" }}
      >
        <div className="quiz-card card custom-card custom-card-width">
          <div className="quiz-card-body">
            <p className="quiz-card-text">
              {stressSentences[i - 1]}
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name={radioGroupName}
                  id={`disagree${i}`}
                  className="form-check-input"
                />
                <label htmlFor={`disagree${i}`} className="form-check-label">
                  Disagree
                </label>

                <input
                  type="radio"
                  name={radioGroupName}
                  id={`stronglyDisagree${i}`}
                  className="form-check-input"
                />
                <label
                  htmlFor={`stronglyDisagree${i}`}
                  className="form-check-label"
                >
                  Strongly Disagree
                </label>

                <input
                  type="radio"
                  name={radioGroupName}
                  id={`agree${i}`}
                  className="form-check-input"
                />
                <label htmlFor={`agree${i}`} className="form-check-label">
                  Agree
                </label>

                <input
                  type="radio"
                  name={radioGroupName}
                  id={`stronglyAgree${i}`}
                  className="form-check-input"
                />
                <label
                  htmlFor={`stronglyAgree${i}`}
                  className="form-check-label"
                >
                  Strongly Agree
                </label>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const [questions, setQuestions] = useState([]);

  const { Questionnaire_id } = useParams();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select("*")
          .eq("Questionnaire_id", Questionnaire_id);

        if (data) {
          setQuestions(data);
        } else if (error) {
          console.error("Error fetching questions:", error.message);
        }
      } catch (error) {
        console.error("Error fetching questions:", error.message);
      }
    };

    fetchQuestions();
  }, [Questionnaire_id]);

  const handleRadioChange = (questionId, selectedOption) => {
    console.log(`Question ${questionId} selected option: ${selectedOption}`);
    // Handle radio change logic if needed
  };

  return (
    <div className="button-box">
      <div className="padded-card">
        {questions.map((question, index) => (
          <div
            key={index}
            className="d-flex justify-content-center vh-20"
            style={{ padding: "10px" }}
          >
            <div className="quiz-card card custom-card custom-card-width">
              <div className="quiz-card-body">
                <p className="quiz-card-text">
                  {index + 1}. {question.Question}
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      name={`radioGroup${index}`}
                      id={`option1_${index}`}
                      value="option1"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "option1")
                      }
                    />
                    <label
                      htmlFor={`option1_${index}`}
                      className="form-check-label"
                    >
                      Option 1
                    </label>

                    <input
                      type="radio"
                      name={`radioGroup${index}`}
                      id={`option2_${index}`}
                      value="option2"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "option2")
                      }
                    />
                    <label
                      htmlFor={`option2_${index}`}
                      className="form-check-label"
                    >
                      Option 2
                    </label>

                    {/* Add more options as needed */}
                  </div>
                </p>
              </div>
            </div>
          </div>
        ))}
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
          <button className="submit-button" onClick={modal}>
            Submit Quiz
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddQuizzes;
