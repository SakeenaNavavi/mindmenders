import React, { useEffect, useState } from 'react';
import './index.css';
import { Navigate, useNavigate } from 'react-router';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from "../../Components/molecules/Navbar/index.jsx";

const LoginRegister = () => {
  const Navigate = useNavigate();
  const [selectedUsername, setSelectedUsername] = useState(null);
  const [UserId, setUserId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  const handleUsernameChange = (e) => {
    setSelectedUsername(e.target.value);
  };
  useEffect(() => {
    const imgBtn = document.querySelector('.img__btn');
    const cont = document.querySelector('.cont');

    const handleButtonClick = () => {
      cont.classList.toggle('s--signup');
    };

    imgBtn.addEventListener('click', handleButtonClick);

    return () => {
      imgBtn.removeEventListener('click', handleButtonClick);
    };
  }, []);

  const [FormData, setFormData] = useState({
    F_name: '',
    L_name: '',
    DOB: '',
    gender: '',
    Email: '',
    password: '',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();
    //const formData = new FormData(e.target);
    console.log(e.target);

    const F_name = document.getElementById('F_name').value;
    const L_name = document.getElementById('L_name').value;
    const DOB = document.getElementById('DOB').value;
    const Email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    if (!F_name || !L_name || !DOB || !Email || !password) {
      showAlert('Please fill out all the fields');
      return;
    }

    console.log(F_name);

    const formDataToUpdateSupabase = {
      // F_name: formData.get('F_name'),
      // L_name: formData.get('L_name'),
      // DOB: formData.get('DOB'),
      // Email: formData.get('Email'),
      // password: formData.get('password'),
      F_name,
      L_name,
      DOB,
      Email,
      password,

    };

    await insertDataIntoSupabase(formDataToUpdateSupabase);
  };

  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('tblUser').insert([
        {
          F_name: formDataToUpdateSupabase.F_name,
          L_name: formDataToUpdateSupabase.L_name,
          DOB: formDataToUpdateSupabase.DOB,
          Email: formDataToUpdateSupabase.Email,
          password: formDataToUpdateSupabase.password,
        },
      ]);

      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        alert('Data inserted into Supabase: ' + JSON.stringify(data));
        showAlert('You are successfully registered.');
      }

    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUsername === 'Visitor') {
      handleVisitorLogin()
    }
    else if (selectedUsername === 'Consultant') {
      handleConsultantLogin()
    }
    else {
      alert('Please fill out all the fields!');
    }
  }
  const handleVisitorLogin = async () => {
    try {
      const { data: VisitorData, error: VisitorError } = await supabase
        .from('tblUser')
        .select('id,password')
        .eq('Email', FormData.Email);

      if (VisitorError) {
        alert(VisitorError.message);
        return;
      }
      if (VisitorData && VisitorData.length > 0) {
        const UserID = VisitorData[0].id;
        const password = VisitorData[0].password;


        if (password === FormData.password) {
          setUserId(UserID);
          Navigate('/', { state: { UserID } });
        }
        else {
          alert('Wrong password!')
        }
      }
      else {
        alert('No user with that email!')
      }
    }
    catch (VisitorError) {
      alert(VisitorError.message)
    }
  };
  const handleConsultantLogin = async () => {
    try {
      const { data: ConsultantData, error: ConsultantError } = await supabase
        .from('tblUser')
        .select('id,password')
        .eq('Email', FormData.Email);

      if (ConsultantError) {
        alert(ConsultantError.message);
        return;
      }
      if (ConsultantData && ConsultantData.length > 0) {
        const UserID = ConsultantData[0].id;
        const password = ConsultantData[0].password;

        // if (password === FormData.password) {
        //   Navigate('/', { state: { UserID } });
        // }
        // else {
        //   alert('Wrong password!')
        // }
      }
      else {
        alert('No user with that email!')
      }
    }
    catch (ConsultantError) {
      alert(ConsultantError.message)
    }
  };
  return (
    <div className="container">
      <Navbar/>
      <div className="cont">
        <div className="form sign-in">
          <form>
            <h2>Welcome</h2>
            <label>
              <span>Email</span></label>
            <input type="Email" id="Email" name='Email' onChange={handleInputChange} required />
            <label>
              <span>Role</span>
              <select id="validationDefaultUsername" value={selectedUsername} onChange={handleUsernameChange} >
                <option value="Visitor">Visitor</option>
                <option value="Consultant">Consultant</option>
              </select>
            </label>
            <label>
              <span>Password</span></label>
            <input type="password" id="password" name="password" onChange={handleInputChange} required />

            <p className="forgot-pass">Forgot password?</p>
            <button type="submit" className="btn btn-success submit" onClick={handleSubmit}>
              Sign In
            </button>
          </form>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>You’re just one step away from joining us! <br /><br />Create your account and explore our features!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you are already a member, <br />simply sign in to access your account</h3>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Create your Account</h2>
            <form onSubmit={gatDataIntoSupabase}>
              <label>
                <span>First name</span></label>
              <input type="text" id="F_name" name="F_name" required />

              <label>
                <span>Last name</span></label>
              <input type="text" id="L_name" name="L_name" required />

              <label>
                <span>Date of Birth</span></label>
              <input type="date" id="DOB" name="DOB" className="form-control" required />

              <label>
                <span>Email</span></label>
              <input type="Email" id="Email" name="Email" className="form-control" required />

              <label>
                <span>Password</span></label>
              <input type="password" id="password" className="form-control" name="password" required />

              <button type="submit" className="btn btn-success submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;