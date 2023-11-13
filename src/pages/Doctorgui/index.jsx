import React, { Component } from 'react';
import { Row, Col, OverlayTrigger, Popover } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './index.css';


class Doctorgui extends Component {
  constructor() {
    super();
    this.state = {
      showCalendar: false,
      selectedDate: null,
      selectedTime: '12:00',
      messages: [],
      newMessage: '',
      contacts: [
        { id: 1, name: 'John', image: 'https://oldnavy.gap.com/webcontent/0027/926/789/cn27926789.jpg' },
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
        { id: 5, name: 'Patient 5'},
        { id: 6, name: 'Patient 6'}
      ],
      selectedRequestId: null, 
    };
  }

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

  render() {
    const { messages, newMessage, contacts, patientRequests, selectedDate, selectedTime, selectedRequestId } = this.state;

    return (
      <div className="website-container">
        <Row className="boxed">
          <Col md={4}>
            <h2 className="contactlisth">Contact List</h2>
            <ul className="contact-list">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <div className="contact-item">
                    <div className="contact-box">
                      <img src={contact.image} alt={contact.name} className="contact-image" />
                      <span className="contact-name">{contact.name}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row className="boxedh">
          <Col md={4}>
            <div className="mental-health-chat">
              <div className="chat-window">
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
      <button onClick={this.handleSendMessage} className="sendbutton">Send</button>
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
                            <div class="form-group">
    <label for="date" className="date-label">Date</label>
    <input type="date" class="date_control" id="date" name="date"/>
  </div>
  <div class="time_control">
    <label for="time"className="time_label" >Time</label>
    <select class="form-control" id="time" name="time">
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
  <button>Comfrom</button>
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

export default Doctorgui;
