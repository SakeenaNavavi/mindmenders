import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCamera, faImage, faCog, faQuestionCircle);

class Home extends Component {
  constructor() {
    super();
    this.state = {
    selectedContact: null,
    showCalendar: false,
    selectedDate: null,
    activeContactId: null,
    selectedTime: '12:00',
    messages: [],
    newMessage: '',
    contacts: [
      { id: 1, name: 'John', image: 'https://th.bing.com/th/id/OIP.2wJgLm91mIUVE7lomPTesQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { id: 2, name: 'Mary', image: 'https://th.bing.com/th/id/OIP.JFI2Xfey2oVbpOBcZbNDAAHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { id: 3, name: 'David', image: 'https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?w=186&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { id: 4, name: 'Sarah', image: 'https://th.bing.com/th/id/OIP.ZZf5ANaOGgdbBM-ot_12FgHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
      { id: 5, name: 'Ann', image: 'https://i.pinimg.com/736x/16/df/a6/16dfa6cf0de7da6facd73edf61005f97.jpg' },
      { id: 6, name: 'Jane', image: 'https://i.pinimg.com/originals/b0/4d/dc/b04ddc024cc8b3e206349af27a63880b.jpg' },
      { id: 7, name: 'Emily', image: 'https://img.freepik.com/premium-vector/icons-with-faces-cute-girls-colorful-hair-cheerful-girls-with-colored-hair-vector-illustration_528104-434.jpg?w=1380' },
      { id: 8, name: 'Robert', image: 'https://img.freepik.com/premium-vector/icons-with-faces-cute-girls-colorful-hair-cheerful-girls-with-colored-hair-vector-illustration-isolated-white-background_528104-489.jpg' },
      { id: 9, name: 'Jessica', image: 'https://img.freepik.com/premium-vector/icons-with-faces-cute-girls-colorful-hair-cheerful-girls-with-colored-hair-vector-illustration-isolated-white-background_528104-491.jpg?w=826' },
    ],
    patientRequests: [
      { id: 1, name: 'Patient 1' },
      { id: 2, name: 'Patient 2' },
      { id: 3, name: 'Patient 3' },
      { id: 4, name: 'Patient 4' },
      { id: 5, name: 'Patient 5'},
      { id: 6, name: 'Patient 6'}
    ],
    selectedRequestId: null, 
  };
}

  handleContactClick = (contactId) => {
    const selectedContact = this.state.contacts.find((contact) => contact.id === contactId);
    this.setState({ selectedContact });
  };

  handleNewMessageChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;
    if (newMessage.trim() === '') return;

    const newMessages = [...messages, { text: newMessage, sender: 'You' }];
    this.setState({ messages: newMessages, newMessage: '' });
  };

  handleAcceptRequest = (requestId) => {
    this.setState({
      selectedRequestId: requestId,
      showCalendar: true,
    });
  };

  handleRejectRequest = (requestId) => {
    this.setState((prevState) => {
      const updatedPatientRequests = prevState.patientRequests.filter(
        (request) => request.id !== requestId
      );
      return {
        patientRequests: updatedPatientRequests,
      };
    });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = (time) => {
    this.setState({ selectedTime: time });
  };

  hideCalendar = () => {
    this.setState({ showCalendar: false });
  };

  getLatestMessage(contactId) {
    const { messages } = this.state;
    const messagesForContact = messages
      .filter((message) => message.sender !== 'You' && this.getContactName(message.sender) === this.getContactName(contactId))
      .reverse();
  
    const latestMessage = messagesForContact[0];
  
    return latestMessage ? latestMessage.text : 'No messages';
  }

  getContactName(contactId) {
    const contact = this.state.contacts.find((c) => c.id === contactId);
    return contact ? contact.name : '';
  }

  render() {
    const { messages, newMessage, contacts, patientRequests, selectedDate, selectedTime, selectedRequestId } = this.state;

    return (
      <div className="website-container">
        <Row className="boxed">
          <Col md={4}>
            <h2 className="contactlisth">Contact List</h2>
            <ul className="contact-list">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => this.handleContactClick(contact.id)}
                  className={`contact-button ${this.state.selectedContact && this.state.selectedContact.id === contact.id ? 'active' : ''}`}
                >
                  <img src={contact.image} alt={contact.name} className="contact-image" />
                  <div className="contact-details">
                    <span className="contact-name">{contact.name}</span>
                    <div className="latest-message">
                      {this.getLatestMessage(contact.id)}
                    </div>
                  </div>
                </button>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="boxedh">
          <Col md={4}>
            <div className="mental-health-chat">
              <div className="chat-window">
              <div className="new-box">
  {this.state.selectedContact && (
    <>
      <img src={this.state.selectedContact.image} alt={this.state.selectedContact.name} />
      <h3>{this.state.selectedContact.name}</h3>
    </>
  )}
  
  
  <button onClick={this.handleCameraClick} className="cameraicon">
    <FontAwesomeIcon icon="camera" />
  </button>
  <button onClick={this.handleImageClick} className="imageicon">
    <FontAwesomeIcon icon="image" />
  </button>
  <button onClick={this.handleSettingsClick} className="cogicon">
    <FontAwesomeIcon icon="cog" />
  </button>
  <button onClick={this.handleHelpClick} className="circleicon">
    <FontAwesomeIcon icon="question-circle" />
  </button>
  </div>

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'You' ? 'user' : 'professional'}`}
                  >
                    <span className="sender">{message.sender}:</span> {message.text}
                  </div>
                ))}
              </div>

              <div className="container">
                <div className="input-area">
                  <div className="input-container">
                    <input
                      className="textclass"
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={this.handleNewMessageChange}
                    />
                    <button onClick={this.handleSendMessage} className="sendbutton">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div className="patient-requests boxed">
              <h2>Patient Requests</h2>
              <ul>
                {patientRequests.map((request) => (
                  <li key={request.id} className="patient-request">
                    <div className="request-info">
                      <span className="request-name">{request.name}</span>
                      <div className="button-container">
                        <button onClick={() => this.handleAcceptRequest(request.id)} className="accept-button">
                          Accept
                        </button>
                        <button className="reject-button" onClick={() => this.handleRejectRequest(request.id)}>
                          Reject
                        </button>

                        {selectedRequestId === request.id && (
                          <div className="calendar-popover">
                            <Popover id="calendar-popover" title="Select Date and Time">
                              <div className="form-group">
                                <label htmlFor="date" className="date-label">Date</label>
                                <input type="date" className="date_control" id="date" name="date" />
                              </div>
                              <div className="time_control">
                                <label htmlFor="time" className="time_label">Time</label>
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
                              <button>Confirm</button>
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
      </div>
    );
  }
}

export default Home;
