import React, { Component } from 'react';
import { Row, Col, Popover } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './index.css';

library.add(faCamera, faImage, faCog, faQuestionCircle);

class Doctorgui extends Component {
  constructor() {
    super();
    this.state = {
      showCalendar: false,
      selectedDate: null,
      selectedTime: '10:00 AM', // Default time
      messages: [],
      newMessage: '',
      contacts: [
        { id: 1, name: 'John', image: 'https://th.bing.com/th/id/OIP.2wJgLm91mIUVE7lomPTesQHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { id: 2, name: 'Mary', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 3, name: 'David', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 4, name: 'Sarah', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 5, name: 'Ann', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 6, name: 'Jane', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 7, name: 'Emily', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 8, name: 'Robert', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
        { id: 9, name: 'Jessica', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
      ],
      patientRequests: [
        { id: 1, name: 'Patient 1' },
        { id: 2, name: 'Patient 2' },
        { id: 3, name: 'Patient 3' },
        { id: 4, name: 'Patient 4' },
        { id: 5, name: 'Patient 5' },
       
       
      ],
      selectedRequestId: null,
      selectedContact: null,
      popovers: {},
      showForm: false,
    };
  }

  handleContactClick = (contactId) => {
    const selectedContact = this.state.contacts.find((contact) => contact.id === contactId);
    this.setState({ selectedContact });
  };

  handleAcceptRequest = (requestId) => {
    this.setState((prevState) => ({
      selectedRequestId: requestId,
      popovers: {
        ...prevState.popovers,
        [requestId]: true,
      },
      showForm: true,
    }));
  };

  handleRejectRequest = (requestId) => {
    // Remove the rejected request from the patientRequests array
    this.setState((prevState) => ({
      patientRequests: prevState.patientRequests.filter((request) => request.id !== requestId),
      popovers: {
        ...prevState.popovers,
        [requestId]: false,
      },
      showForm: true,
    }));
  };

  setPopoverContent = (requestId, content) => {
    this.setState((prevState) => ({
      popoverContent: {
        ...prevState.popoverContent,
        [requestId]: content,
      },
    }));
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleTimeChange = (time) => {
    this.setState({ selectedTime: time });
  };

  handleNewMessageChange = (value) => {
    this.setState({ newMessage: value });
  };

  handleSendMessage = () => {
    const newMessageObject = {
      sender: 'You', // Change this accordingly
      text: this.state.newMessage,
    };

    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessageObject],
      newMessage: '',
    }));
  };

  handleConfirmAppointment = () => {
    this.setState({ showCalendar: false, showForm: false });
  };

  render() {
    const { messages, newMessage, contacts, patientRequests, selectedDate, selectedTime, showForm } = this.state;

    return (
      <div className="website-container-drgui">
        <Row className="box1">
          <Col md={4}>
            <h2 className="drgui-h2">Contact List</h2>
            <ul className="contact-list-drgui">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <button
                    onClick={() => this.handleContactClick(contact.id)}
                    className={`contact-button-drgui ${this.state.selectedContact && this.state.selectedContact.id === contact.id ? 'active' : ''}`}
                  >
                    <img src={contact.image} alt={contact.name} className="contact-image-drgui" />
                    <div className="contact-details-drgui">
                      <span className="contact-name-drgui">{contact.name}</span>
                    </div>
                  </button>
                </li>
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
                  <div key={index}>
                    {/* Render your chat messages here */}
                    {message.sender}: {message.text}
                  </div>
                ))}
              </div>

              <div className="container-drgui">
                <div className="input-area">
                  <div className="input-container-drgui">
                    <input
                      type="text"
                      className="textclassdrgui"
                      placeholder="Type your message..."
                      value={this.state.newMessage}
                      onChange={(e) => this.handleNewMessageChange(e.target.value)}
                    />
                    <button onClick={this.handleSendMessage} className="drguisendbutton">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="boxed">
          <Col md={4}>
            <div className="patient-requests boxed-docgui">
              <h2 className="patient-requests-h2">Patient Requests</h2>
              <ul>
                {patientRequests.map((request) => (
                  <div className="patient-request-box" key={request.id}>
                    <li className="patient-request-docgui">
                      <div className="request-info-docgui">
                        <span className="request-name-docgui">{request.name}</span>
                        <div className="button-container-docgui">
                          <button
                            onClick={() => {
                              this.handleAcceptRequest(request.id);
                              this.setPopoverContent(
                                request.id,
                                <div>Your unique popover message for {request.name}</div>
                              );
                            }}
                            className="accept-button"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => this.handleRejectRequest(request.id)}
                            className="reject-button-docgui"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </li>
            {this.state.popovers[request.id] && showForm && (
              <div className="calendar-popover">
                {this.state.selectedRequestId === request.id && (
                  <div className="calendar-popover-docgui">
                    <Popover id="calendar-popover" title="Select Date and Time">
                      <div className="form-group-docgui">
                        <label htmlFor="date" className="date-label-docgui">
                          Date
                        </label>
                        <input type="date" className="date_control-drgui" id="date" name="date" />
                      </div>
                      <div className="time_control">
                        <label htmlFor="time" className="time_label-drgui">
                          Time
                        </label>
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
                      <button onClick={this.handleConfirmAppointment}>Confirm</button>
                    </Popover>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  </Col>
</Row>
</div>
    );
  }
}

export default Doctorgui;
