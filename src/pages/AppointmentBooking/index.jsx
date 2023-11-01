import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
const AppointmentBooking=()=>{

  
	const validateForm = () => {
   

		const firstName = document.getElementById('first_name').value;
		const lastName = document.getElementById('last_name').value;
		const phoneNumber = document.getElementById('phone_number').value;
		const email = document.getElementById('email').value;
		const DOB = document.getElementById('DOB').value;
		if (firstName.trim() === '') {
			alert('Please enter your first name.');
			return false;
		  }
	  
		  if (lastName.trim() === '') {
			alert('Please enter your last name.');
			return false;
		  }
	  
		  if (phoneNumber.trim() === '') {
			alert('Please enter your phone number.');
			return false;
		  }
		  if(    email.trim() === '' ||
		  DOB.trim() === '')
		  {
			alert('Please fill out all fields.');
			return false;
		  }
      Swal.fire({
        title: 'MindMenders',
        text: "Appointment request sent! You will be notified once the request is accepted. Thank you!", 
        confirmButtonColor: '#443806'
      });

      return false;
      

		};

	return(
    
		<div className="reservation">
		<div class="reservation-container">
			<form action="/submit-form" method="post" onSubmit={(e)=>{   
				e.preventDefault(); // Prevent the default form submission
          if (validateForm()) {
            // Form is valid, submit it here
            document.forms[0].submit();
		  }
          }}>
			<h1 class="form-header" data-component="header">Book Your Appointment</h1>
            <div class="form-subHeader">Kindly complete the form below, and we will promptly respond with a confirmation status message.</div><br/>
  <div class="form-group">
    <label for="first_name">First name</label>
    <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Enter your first name"/>
  </div>
  <div class="form-group">
    <label for="last_name">Last name</label>
    <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Enter your last name"/>
  </div>
  <div class="form-group">
    <label for="phone_number">Phone number</label>
    <input type="tel" class="form-control" id="phone_number" name="phone_number" placeholder="Enter your phone number"/>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address"/>
  </div>
  <div class="form-group">
    <label for="date">Date Of Birth</label>
    <input type="date" class="form-control" id="DOB" name="DOB"/>
  </div>
  <div class="form-group">
    <label>pick your gender:</label><br/>
  <input type="radio" id="male" name="gender" value="male"/>
  <label className="gender-label" for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female"/>
  <label className="gender-label" for="female">Female</label>
  <input type="radio" id="other" name="gender" value="other"/>
  <label className="gender-label" for="other">Other</label>
  </div>
  <br/>
  <button type="submit" class="btn btn-primary" onClick={validateForm}>Submit</button>
</form>

		</div>
		</div>
	)
}
export default AppointmentBooking;