import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import supabase from "../../supa/supabase/supabaseClient";
import './index.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
import Swal from 'sweetalert2';

const AddQuizzes = () => {
  const { Questionnaire_id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const handleRadioChange = (questionId, selectedOption) => {
    let points = 0;

    // Assign points based on the selected option
    switch (selectedOption) {
      case 'stronglyDisagree':
        points = 0;
        break;
      case 'disagree':
        points = 1;
        break;
      case 'agree':
        points = 2;
        break;
      case 'stronglyAgree':
        points = 3;
        break;
      default:
        points = 0; // Default to 0 if the option is not recognized
    }

    // Update the total score
    setTotalScore((prevScore) => prevScore + points);

    // Handle other radio change logic here
  };

  const categorizeStressLevel = (score) => {
    if (score >= 0 && score <= 10) {
      return 'Low';
    } else if (score > 10 && score <= 20) {
      return 'Moderate';
    } else if (score > 20 && score <= 30) {
      return 'High';
    } else {
      return 'Invalid Score';
    }
  };

  const handleFormSubmit = () => {
    // Check if any question is unanswered
    const unansweredQuestions = questions.filter((question, index) => {
      const selectedOption = getSelectedOption(index);
      return selectedOption === null;
    });

    // If there are unanswered questions, show an error message
    if (unansweredQuestions.length > 0) {
      // Display an error message using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please answer all questions before submitting the quiz.',
      });
      return; // Do not proceed with submission
    }

    // Use SweetAlert for a more visually appealing alert
    Swal.fire({
      icon: 'success', 
      title: 'Quiz submitted successfully!',
      text: `Total Score: ${totalScore}\nStress Level: ${categorizeStressLevel(totalScore)}`,
    });
  };

  // Helper function to get the selected option for a question
  const getSelectedOption = (index) => {
    const radioGroupName = `radioGroup${index}`;
    const selectedOption = Array.from(document.getElementsByName(radioGroupName)).find((radio) => radio.checked);

    return selectedOption ? selectedOption.value : null;
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from("tblQuestions")
          .select("*")
          .eq("Questionnaire_id", Questionnaire_id)
          .limit(10);

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

  return (
    <div className="button-box">
      <div className="padded-card">
        <Navbar/>
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
                      id={`stronglyDisagree${index}`}
                      value="stronglyDisagree"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "stronglyDisagree")
                      }
                    />
                    <label
                      htmlFor={`stronglyDisagree${index}`}
                      className="form-check-label"
                    >
                      Strongly Disagree
                    </label>

                    <input
                      type="radio"
                      name={`radioGroup${index}`}
                      id={`disagree${index}`}
                      value="disagree"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "disagree")
                      }
                    />
                    <label
                      htmlFor={`disagree${index}`}
                      className="form-check-label"
                    >
                      Disagree
                    </label>

                    <input
                      type="radio"
                      name={`radioGroup${index}`}
                      id={`agree${index}`}
                      value="agree"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "agree")
                      }
                    />
                    <label
                      htmlFor={`agree${index}`}
                      className="form-check-label"
                    >
                      Agree
                    </label>

                    <input
                      type="radio"
                      name={`radioGroup${index}`}
                      id={`stronglyAgree${index}`}
                      value="stronglyAgree"
                      onChange={() =>
                        handleRadioChange(question.Question_id, "stronglyAgree")
                      }
                    />
                    <label
                      htmlFor={`stronglyAgree${index}`}
                      className="form-check-label"
                    >
                      Strongly Agree
                    </label>
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
          <button className="submit-button" onClick={handleFormSubmit}>
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
