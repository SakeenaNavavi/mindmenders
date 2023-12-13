import React, { useState } from 'react';
import AppointmentBooking from '../../../pages/AppointmentBooking';
import DocGUI from '../../../pages/DocGUI';

const DocAppointment = () => {
//   const [acceptedRequest, setAcceptedRequest] = useState(null);
const [visitorData, setVisitorData] = useState(null);

const handleVisitorSubmit = (newData) => {
    // Set the visitor data when the form is submitted
    setVisitorData(newData);
  };

  return (
    <div>
      <AppointmentBooking onSubmit={handleVisitorSubmit} />
      <DocGUI visitorData={visitorData} />
    </div>
  );
};

export default DocAppointment;
