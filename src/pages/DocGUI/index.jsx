import React, { useState, useEffect } from 'react';
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import supabase from '../../supa/supabase/supabaseClient';

library.add(faCamera, faImage, faCog, faQuestionCircle);

const DocGUI = () => {
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

  // Another Table Form State
  

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
  

  // Another Table Form Submit Handler
 
       


     

  useEffect(() => {
    // Uncomment the following lines if you want to clear the data on component unmount
    // return () => {
    //   localStorage.removeItem('submittedQuestionnaireData');
    //   localStorage.removeItem('submittedMentalHealthData');
    //   localStorage.removeItem('submittedQuestionsData');
    // };
  }, []);

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

  const handleAcceptRequest = (requestId) => {
    setSelectedRequestId(requestId);
    setShowCalendar(true);
  };

  const handleRejectRequest = (requestId) => {
    const updatedPatientRequests = patientRequests.filter((request) => request.id !== requestId);
    setPatientRequests(updatedPatientRequests);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const hideCalendar = () => {
    setShowCalendar(false);
  };

  const handleConfirmAppointment = () => {
    // Perform any actions needed for confirming the appointment
    setSelectedRequestId(null);
    setShowCalendar(false);
  };

  return (
    <div className="website-container-drgui">
      {/* ... Existing JSX Code ... */}
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
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="3:00 PM">3:00 PM</option>
                                <option value="4:00 PM">4:00 PM</option>
                                <option value="5:00 PM">5:00 PM</option>
                                <option value="6:00 PM">6:00 PM</option>
                                <option value="7:00 PM">7:00 PM</option>
                                <option value="8:00 PM">8:00 PM</option>
                                <option value="9:00 PM">9:00 PM</option>
                                <option value="10:00 PM">10:00 PM</option>
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
