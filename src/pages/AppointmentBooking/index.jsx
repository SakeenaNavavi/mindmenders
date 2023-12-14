import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import supabase from '../../supa/supabase/supabaseClient.js';
import './index.css';
import Navbar from "../../Components/molecules/Navbar/index.jsx";
const AppointmentBooking = ({onSubmit}) => {


  const [newData, setNewData] = useState({
    First_Name: '',
    Last_Name: '',
    Phone_Number: '',
    Email: '',
    DOB: '',
    date:'',
    Time:'',
  });
  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();
    //const formData = new FormData(e.target);
    console.log(e.target);

    const First_Name = document.getElementById('First_Name').value;
    const Last_Name = document.getElementById('Last_Name').value;
    const DOB = document.getElementById('DOB').value;
    const Email = document.getElementById('Email').value;
    const Phone_Number=document.getElementById('Phone_Number').value;
    const Time=document.getElementById('Time').value;
    const date=document.getElementById('date').value;


    const formDataToUpdateSupabase = {
      // F_name: formData.get('F_name'),
      // L_name: formData.get('L_name'),
      // DOB: formData.get('DOB'),
      // Email: formData.get('Email'),
      // password: formData.get('password'),
      First_Name,
      Last_Name,
      DOB,
      Email,
      Phone_Number,
      Time,
      date,

    };

    await insertDataIntoSupabase(formDataToUpdateSupabase);
  };
  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('tblBooking').insert([
        {
          First_Name: formDataToUpdateSupabase.First_Name,
          Last_Name: formDataToUpdateSupabase.Last_Name,
          DOB: formDataToUpdateSupabase.DOB,
          Email: formDataToUpdateSupabase.Email,
          Phone_Number:formDataToUpdateSupabase.Phone_Number,
          Time:formDataToUpdateSupabase.Time,
          date:formDataToUpdateSupabase.date,

        },
      ]);

      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        Swal.fire({
          title: `Hello ${formDataToUpdateSupabase.First_Name}`,
          text: `You have successfully booked an appointment! see you soon on ${formDataToUpdateSupabase.date} at ${formDataToUpdateSupabase.Time}`,
          icon: 'success',
          confirmButtonText: 'OK',
        })
      }

    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />

      <div className="appointment">
        <div className="appointment-container">
          <form onSubmit={gatDataIntoSupabase}>
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
                id="Phone_Number"
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
                id="Email"
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
            <div className="form-group">
              <label htmlFor='time'>Time</label>
              <select className="form-control" id="Time" name="Time" value={newData.Time} onChange={handleInputChange} required>
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
            <div className='form-group'>
              <label htmlFor="date" className="date-label">
                Date
              </label>
              <input type="date" className="form-control" id="date" name="date" value={newData.Date} onChange={handleInputChange} required/>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
