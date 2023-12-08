import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import supabase from '../../supa/supabase/supabaseClient';
import './index.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
const AppointmentBooking = (location) => {
  const UserId = location.state?.UserId;
  const newDataWithUserId = {
    ...newData,
    User_id: UserId,
  };
  const [newData, setNewData] = useState({
    UserId: UserId,
    First_Name: '',
    Last_Name: '',
    Phone_Number: '',
    Email: '',
    DOB: '',
  });

  const handleInsert = async () => {
    try {
      const { data, error } = await supabase.from('tblBooking').insert([newData]);

      if (error) {
        alert(error.message)
      }else{
      alert('insert successful!')
      // Optionally, you can show a success message using Swal or another method.
      Swal.fire({
        title: 'Success',
        text: 'Appointment booked successfully!',
        icon: 'success',
      });}
    } catch (error) {
      alert('Error inserting data:', error.message);
      
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('tblBooking').select('*');

        if (error) {
          throw error;
        }

        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleInsert();
    Swal.fire({
      title: 'Request Pending!',
      text: 'You will be notified when the Consultant confirms your appointment request!',
      icon: 'success',
    });}
    handleInsert();
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 

  return (
    
    <div className="appointment">
       <Navbar/>
      <div className="appointment-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-header" data-component="header">
            Book Your Appointment
          </h1>
          <div className="form-subHeader">
            Kindly complete the form below, and we will promptly respond with a confirmation status message.
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="First_Name">First name</label>
            <input
              type="text"
              className="form-control"
              id="First_Name"
              name="First_Name"
              placeholder="Enter your first name"
              value={newData.First_Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              className="form-control"
              id="Last_Name"
              name="Last_Name"
              placeholder="Enter your last name"
              value={newData.Last_Name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              name="Phone_Number"
              placeholder="Enter your phone number"
              value={newData.Phone_Number}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="Email"
              placeholder="Enter your email address"
              value={newData.Email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="DOB">Date Of Birth</label>
            <input
              type="date"
              className="form-control"
              id="DOB"
              name="DOB"
              value={newData.DOB}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
