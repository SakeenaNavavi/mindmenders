const AppointmentBooking=()=>
{
		const firstName = document.getElementById('first_name').value;
		const lastName = document.getElementById('last_name').value;
		const phoneNumber = document.getElementById('phone_number').value;
		const email = document.getElementById('email').value;
    const Dob = document.getElementById('Dob').value;

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
		  date.trim() === '' ||
		  time.trim() === '' ||
		  numberOfGuests.trim() === '')
		  {
			alert('Please fill out all fields.');
			return false;
		  }

      if(Dob.trim() == '') {
        alert('please enter your dateogf birth.');
        return false;
      }

		};

	return(
    
		<div className="appointment">
		<div class="appointment-container">
			<form action="/submit-form" method="post" onSubmit={(e)=>{   
				e.preventDefault(); // Prevent the default form submission
          if (validateForm()) {
            // Form is valid, submit it here
            document.forms[0].submit();
		  }
          }}>

			    <h1 id="header_18" class="form-header" data-component="header">Book Your Appointment</h1>
          <div id="subHeader_18" class="form-subHeader">Fill the form below and we will get back soon to you for more updates and plan your appointment.</div><br/>
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
            <label for="Dob">Email</label>
            <input type="Dob" class="form-control" id="Dob" name="DOB" placeholder="Enter your date of birth"/>
          </div>
        
        <br/>
        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={validateForm}>Submit</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Appointment request sent! You will be notified once the request is accepted. Thank you!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </form>
		  </div>
		</div>
	)


export default AppointmentBooking;