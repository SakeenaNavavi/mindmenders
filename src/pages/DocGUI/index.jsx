import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import React, { useState } from 'react';
library.add(faCamera, faImage, faCog, faQuestionCircle);

class DocGUI extends Component {
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
        // ... (your contact data remains the same)
      ],
      patientRequests: [
        // ... (your patient request data remains the same)
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
      <div className="website-container-docgui">
        <Row className="boxed-docgui">
          <Col md={4}>
            <h2 className="contactlisth-docgui">Contact List</h2>
            <ul className="contact-list-docgui">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => this.handleContactClick(contact.id)}
                  className={`contact-button-docgui ${this.state.selectedContact && this.state.selectedContact.id === contact.id ? 'active' : ''}`}
                >
                  <img src={contact.image} alt={contact.name} className="contact-image-docgui" />
                  <div className="contact-details-docgui">
                    <span className="contact-name-docgui">{contact.name}</span>
                    <div className="latest-message-docgui">
                      {this.getLatestMessage(contact.id)}
                    </div>
                  </div>
                </button>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="boxedh-docgui">
          <Col md={4}>
            <div className="mental-health-chat-docgui">
              <div className="chat-window-docgui">
                <div className="new-box-docgui">
                  {this.state.selectedContact && (
                    <>
                      <img src={this.state.selectedContact.image} alt={this.state.selectedContact.name} />
                      <h3>{this.state.selectedContact.name}</h3>
                    </>
                  )}

                  <button onClick={this.handleCameraClick} className="cameraicon-docgui">
                    <FontAwesomeIcon icon="camera" />
                  </button>
                  <button onClick={this.handleImageClick} className="imageicon-docgui">
                    <FontAwesomeIcon icon="image" />
                  </button>
                  <button onClick={this.handleSettingsClick} className="cogicon-docgui">
                    <FontAwesomeIcon icon="cog" />
                  </button>
                  <button onClick={this.handleHelpClick} className="circleicon-docgui">
                    <FontAwesomeIcon icon="question-circle" />
                  </button>
                </div>

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${message} ${message.sender === 'You' ? 'user' : 'professional'}`}
                  >
                    <span className="sender-docgui">{message.sender}:</span> {message.text}
                  </div>
                ))}
              </div>

              <div className="container-docgui">
                <div className="input-area-docgui">
                  <div className="input-container-docgui">
                    <input
                      className="textclass-docgui"
                      type="text"
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={this.handleNewMessageChange}
                    />
                    <button onClick={this.handleSendMessage} className="sendbutton-docgui">
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
            <div className="patient-requests boxed-docgui">
              <h2>Patient Requests</h2>
              <ul>
                {patientRequests.map((request) => (
                  <li key={request.id} className="patient-request-docgui">
                    <div className="request-info-docgui">
                      <span className="request-name-docgui">{request.name}</span>
                      <div className="button-container-docgui">
                        <button onClick={() => this.handleAcceptRequest(request.id)} className="accept-button">
                          Accept
                        </button>
                        <button className="reject-button-docgui" onClick={() => this.handleRejectRequest(request.id)}>
                          Reject
                        </button>

                        {selectedRequestId === request.id && (
                          <div className="calendar-popover-docgui">
                            <Popover id="calendar-popover" title="Select Date and Time">
                              <div className="form-group-docgui">
                                <label htmlFor="date" className="date-label-docgui">Date</label>
                                <input type="date" className="date_control" id="date" name="date" />
                              </div>
                              <div className="time_control">
                                <label htmlFor="time" className="time_label">Time</label>
                                <select className="form-control-docgui" id="time" name="time">
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

export default DocGUI;
