import React, { useState } from 'react';
import AppointmentBooking from '../../../pages/AppointmentBooking';
import DocGUI from '../../../pages/DocGUI';

const DocAppointment = () => {
  const [visitorData, setVisitorData] = useState(null);

  const handleVisitorSubmit = (newData) => {
    console.log('Data received in DocAppointment:', newData);
    // Set the visitor data when the form is submitted
    setVisitorData(newData);
  };

  console.log('Rendering DocAppointment with visitorData:', visitorData);

  return (
    <div>
      <AppointmentBooking onSubmit={handleVisitorSubmit} />
      <DocGUI visitorData={visitorData} />
    </div>
  );
};

export default DocAppointment;
