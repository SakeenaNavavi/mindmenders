import React, { useState, useEffect } from 'react';


import { Row, Col, Modal, Button } from 'react-bootstrap';


import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../supa/supabase/supabaseClient';

library.add(faCamera, faImage, faCog, faQuestionCircle);



const DocGUI = ({ visitorData }) => {
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('Visitor Data:', visitorData);

    // Show the modal when visitorData is available
    if (visitorData && Object.keys(visitorData).length > 0) {
      setShowModal(true);
    }
  }, [visitorData]);


  // Consultant Form State
  const [consultantFormData, setConsultantFormData] = useState({


    Questionnaire_type: '',
  });

  const [QuestionnaireSubmittedData, setQuestionnaireSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedQuestionnaireData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [formData, setFormData] = useState({
    Description: '',
    Condition_name: '',
  });

  const [submittedData, setSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedData');
    return storedData ? JSON.parse(storedData) : [];
  });


  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


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

  const handleSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete card logic if needed
    } else {

      const { data, error } = await supabase
        .from('tblMentalHealthConditions')
        .upsert([
          {
            Description: formData.Description,
            Condition_name: formData.Condition_name,
          },
        ]);

      if (error) {


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
      } else {
        console.log('Data inserted into Supabase:', data);
      }

      setSubmittedData([...submittedData, formData]);
      localStorage.setItem('submittedData', JSON.stringify([...submittedData, formData]));
    }


    setFormData({

      Description: '',
      Condition_name: '',
    });
  };

  useEffect(() => {
    // Uncomment the following lines if you want to clear the data on component unmount
    // return () => {
    //   localStorage.removeItem('submittedData');
    // };
  }, []);

  // Filter mental health conditions based on search input
  const filteredData = submittedData.filter((mentalHealthCondition) =>
    mentalHealthCondition &&
    mentalHealthCondition.Description &&
    mentalHealthCondition.Description.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [formSelfHelpStrategiesData, setFormSelfHelpStrategiesData] = useState({
    Strategy: '',
  });

  const [submittedSelfHelpStrategiesData, setSubmittedSelfHelpStrategiesData] = useState(() => {
    const storedData = localStorage.getItem('submittedSelfHelpStrategiesData');
    return storedData ? JSON.parse(storedData) : [];
  });


  const [searchSelfHelpStrategiesInput, setSearchSelfHelpStrategiesInput] = useState('');

  const handleSelfHelpStrategiesChange = (e) => {
    setFormSelfHelpStrategiesData({
      ...formSelfHelpStrategiesData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelfHelpStrategiesSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete card logic if needed
    } else {
      const { data, error } = await supabase
        .from('tblSelfHelpStrategies')
        .upsert([
          {
            Strategy: formSelfHelpStrategiesData.Strategy,
          },
        ]);

      if (error) {
        console.error('Error inserting data into Supabase:', error.message);
      } else {
        console.log('Data inserted into Supabase:', data);
      }

      setSubmittedSelfHelpStrategiesData([...submittedSelfHelpStrategiesData, formSelfHelpStrategiesData]);
      localStorage.setItem(
        'submittedSelfHelpStrategiesData',
        JSON.stringify([...submittedSelfHelpStrategiesData, formSelfHelpStrategiesData])
      );
    }

    setFormSelfHelpStrategiesData({
      Strategy: '',
    });
  };

  useEffect(() => {
    // Uncomment the following lines if you want to clear the data on component unmount
    // return () => {
    //   localStorage.removeItem('submittedSelfHelpStrategiesData');
    // };
  }, []);

  // Filter self-help strategies based on search input
  const filteredSelfHelpStrategiesData = submittedSelfHelpStrategiesData.filter((selfHelpStrategies) =>
    selfHelpStrategies &&
    selfHelpStrategies.Strategy &&
    selfHelpStrategies.Strategy.toLowerCase().includes(searchSelfHelpStrategiesInput.toLowerCase())
  );

  const [selectedContact, setSelectedContact] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [contacts, setContacts] = useState([]);

  const [patientRequests, setPatientRequests] = useState([
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    { id: 3, name: 'Patient 3' },
    { id: 4, name: 'Patient 4' },
    { id: 5, name: 'Patient 5' },
    { id: 6, name: 'Patient 6' },
  ]);

  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleContactClick = (contactId) => {
    const selectedContact = contacts.find((contact) => contact.id === contactId);
    setSelectedContact(selectedContact);
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

      <Row>
        <Col md={4}>
          <div className="patient-requests boxed">
            <h2>Patient Requests</h2>
            <ul>
              {patientRequests.map((request) => (
                <li key={request.id} className="patient-request">
                  <div className="request-info">
                    <span className="request-name">{request.name}</span>
                    <div className="button-container-drgui">
                      <button onClick={() => handleAcceptRequest(request.id)} className="accept-button-drgui">
                        Accept
                      </button>
                      <button className="reject-button-drgui" onClick={() => handleRejectRequest(request.id)}>
                        Reject
                      </button>

                      {selectedRequestId === request.id && (
                        <div className="calendar-popover">
                          <Popover id="calendar-popover" title="Select Date and Time">
                            <div className="form-group">
                              <label htmlFor="date" className="date-label">
                                Date
                              </label>
                              <input type="date" className="date_control" id="date" name="date" />
                            </div>
                            <div className="time_control">
                              <label htmlFor="time" className="time_label">
                                Time
                              </label>
                              <select className="form-control" id="time" name="time">
                                <option value="10:00 AM">10:00 AM</option>
                                {/* ... Other time options ... */}
                              </select>
                            </div>
                            <button onClick={handleConfirmAppointment}>Confirm</button>
                          </Popover>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>


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

        <Col>
          {/* Form for adding new mental health conditions */}
          <form className="Doctorform" onSubmit={handleSubmit}>

            <label className="Doctorformlabel">
              Description:
              <input
                className="Doctorforminput"
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="Doctorformlabel">
              Condition_name:
              <input
                className="Doctorforminput"
                type="text"
                name="Condition_name"
                value={formData.Condition_name}
                onChange={handleChange}
              />
            </label>
            <div className="button-container-Doctorform">
              <button className="Doctorformbutton" type="submit">
                Add
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

          <form className="Doctorform" onSubmit={handleSelfHelpStrategiesSubmit}>
            <label className="Doctorformlabel">
              Strategy:
              <input
                className="Doctorforminput"
                type="text"
                name="Strategy"
                value={formSelfHelpStrategiesData.Strategy}
                onChange={handleSelfHelpStrategiesChange}
              />
            </label>
            <div className="button-container-Doctorformform">
              <button className="Doctorformbutton" type="submit">
                Add
              </button>
            </div>
          </form>

        </Col>
      </Row>
    </div>
  );
};

export default DocGUI;
