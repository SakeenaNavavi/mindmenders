import React, { useState, useEffect } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../supa/supabase/supabaseClient';

library.add(faCamera, faImage, faCog, faQuestionCircle);

const DocGUI = ({ visitorData }) => {
  useEffect(() => {
    console.log('Visitor Data:', visitorData);
    console.log('Show Modal:', showModal);
    // Show the modal when visitorData is available
    if (visitorData) {
      setShowModal(true);
    }
  }, [visitorData]);  

  const [showModal, setShowModal] = useState(false);

  // Consultant Form State
  const [consultantFormData, setConsultantFormData] = useState({
    Questionnaire_type: '',
  });

  const [QuestionnaireSubmittedData, setQuestionnaireSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedQuestionnaireData');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Mental Health Form State
  const [mentalHealthFormData, setMentalHealthFormData] = useState({
    Condition_name: '',
    Description: '',
  });

  const [mentalHealthSubmittedData, setMentalHealthSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedMentalHealthData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [QuestionsSubmittedData, setQuestionsSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedQuestionsData');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Common Form Change Handler
  const handleFormChange = (e, setFormData) => {
    setFormData({
      ...setFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Consultant Form Submit Handler
  const handleQuestionnaireSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete logic if needed
    } else {
      try {
        const { data, error } = await supabase
          .from('tblQuestionnaire')
          .upsert([
            {
              Questionnaire_type: consultantFormData.Questionnaire_type,
            },
          ]);

        if (error) {
          console.error('Error inserting data into Supabase:', error.message);
        } else {
          console.log('Data inserted into Supabase:', data);
          setQuestionnaireSubmittedData([...QuestionnaireSubmittedData, consultantFormData]);
          localStorage.setItem('submittedQuestionnaireData', JSON.stringify([...QuestionnaireSubmittedData, consultantFormData]));
        }
      } catch (error) {
        console.error('Error inserting data into Supabase:', error.message);
      }
    }

    setConsultantFormData({
      Questionnaire_type: '',
    });
  };

  const handleMentalHealthSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete logic if needed
    } else {
      // Validate that Description is not null or empty before submitting
      if (!mentalHealthFormData.Description) {
        console.error('Description is required.');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('tblMentalHealthConditions')
          .upsert([
            {
              Condition_name: mentalHealthFormData.Condition_name,
              Description: mentalHealthFormData.Description,
            },
          ]);

        if (error) {
          console.error('Error inserting data into Supabase:', error.message);
        } else {
          console.log('Data inserted into Supabase:', data);
          setMentalHealthSubmittedData([...mentalHealthSubmittedData, mentalHealthFormData]);
          localStorage.setItem('submittedMentalHealthData', JSON.stringify([...mentalHealthSubmittedData, mentalHealthFormData]));
        }
      } catch (error) {
        console.error('Error inserting data into Supabase:', error.message);
      }
    }

    setMentalHealthFormData({
      Condition_name: '',
      Description: '',
    });
  };

  const handleConfirmAppointment = async () => {
    // Perform any actions needed for confirming the appointment
    try {
      // Assuming acceptedRequest contains the necessary patient details
      const { data, error } = await supabase
        .from('tblBooking')
        .upsert([
          {
          },
        ]);

      if (error) {
        console.error('Error inserting data into Supabase:', error.message);
      } else {
        console.log('Data inserted into Supabase:', data);
        // You may want to update the UI or state to reflect the accepted appointment
      }
    } catch (error) {
      console.error('Error inserting data into Supabase:', error.message);
    }
    setShowModal(false);
  };
  const handleDeclineAppointment = () => {
    setShowModal(false);
  };

  return (
    <div className="website-container-drgui">
      <div>
        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Visitor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Display visitor details */}
            <p>First Name: {visitorData?.First_Name}</p>
            <p>Last Name: {visitorData?.Last_Name}</p>
            <p>Phone Number: {visitorData?.Phone_Number}</p>
            <p>Email: {visitorData?.Email}</p>
            <p>Date of Birth: {visitorData?.DOB}</p>
          </Modal.Body>
          <Modal.Footer>
            {/* Confirm and Decline buttons */}
            <Button variant="primary" onClick={handleConfirmAppointment}>
              Confirm
            </Button>
            <Button variant="danger" onClick={handleDeclineAppointment}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Row>
        <Col >

          <form className="Doctorform" onSubmit={handleMentalHealthSubmit}>
            <label className="Doctorformlabel">
              Condition_name:
              <input
                className="Doctorforminput"
                type="text"
                name="Condition_name"
                value={mentalHealthFormData.Condition_name}
                onChange={(e) => handleFormChange(e, setMentalHealthFormData)}
              />
            </label>
            <br />
            <label className="Doctorformlabel">
              Description:
              <input
                className="Doctorforminput"
                type="text"
                name="Description"
                value={mentalHealthFormData.Description}
                onChange={(e) => handleFormChange(e, setMentalHealthFormData)}
              />
            </label>

            <div className="button-container-Doctorform">
              <button className="Doctorformbutton" type="submit">
                Add Mental Health Condition
              </button>
            </div>
          </form>

          <form className="Doctorform" onSubmit={handleQuestionnaireSubmit}>
            <label className="Doctorformlabel">
              Questionnaire_type:
              <input
                className="Doctorforminput"
                type="text"
                name="Questionnaire_type"
                value={consultantFormData.Questionnaire_type}
                onChange={(e) => handleFormChange(e, setConsultantFormData)}
              />
            </label>
            <div className="button-container-Doctorform">
              <button className="Doctorformbutton" type="submit">
                Add Question
              </button>
            </div>
          </form>
          <br />

        </Col>
      </Row>

    </div>

  );
};

export default DocGUI;
