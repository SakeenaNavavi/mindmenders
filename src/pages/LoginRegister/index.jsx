import React, { useEffect,useState } from 'react';
import './index.css';
import supabase from '../../supabaseClient';
const LoginRegister =()=>{
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
    
    const [formData, setFormData] = useState({
        firstName: ' ',
        lastName: ' ',
        email: ' ',
        password: ' ',
        DOB: ' ',
        gender:' ',
      });
    
      const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
      
        const { data, error } = await supabase.from('tblUser').upsert([
          {
            First_Name: formData.firstName,
            Last_Name: formData.lastName,
            DOB: formData.DOB,
            Email: formData.email,
            Password: formData.password,
          },
        ]);
    
        if (error) {
          alert('Error inserting data:', error);
        } else {
          alert('Data inserted successfully:', data);
          
        }
      };
    return (
        <div className="container">
    <div class="cont">
        <div class="form sign-in">
            <h2>Welcome</h2>
            <label>
                <span>Email</span>
                <input type="email" id="Login_email"/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" id="Login_password"/>
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="submit" className="btn btn-success submit">Sign In</button>
         
        </div>
        <div class="sub-cont">
            <div class="img">
                <div class="img__text m--up">
                 
                    <h3>You’re just one step away from joining us! <br/><br/>Create your account and explore our features!</h3>
                </div>
                <div class="img__text m--in">
                
                    <h3>If you are already a member, <br/>simply sign in to access your account</h3>
                </div>
                <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                    <span class="m--in">Sign In</span>
                </div>
            </div>
            
            <div class="form sign-up" >
            <form onSubmit={handleSubmit}>
                <h2>Create your Account</h2>
                <label>
                    <span>First name</span>
                    <input type="text" id="firstname" value={formData.firstName} onChange={handleChange} required/>
                </label>
                <label>
                    <span>Last name</span>
                    <input type="text" id="lastname" value={formData.lastName} onChange={handleChange} required/>
                </label>
                <label>
                    <span>Date of Birth</span>
                    <input type="date" className="form-control" id="DOB" value={formData.DOB} onChange={handleChange} required/>
                </label>
                <label>
                    <span>Gender</span>
                    <br/>
                    <select className="form-select" id="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="m" className="dropdown-item">Male</option>
                        <option value="f" className="dropdown-item">Female</option>
                        <option value="o" className="dropdown-item">Other</option>
                    </select>
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} required/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" id="password" value={formData.password} onChange={handleChange} required/>
                </label>
                <button type="submit" className="btn btn-success submit">Sign Up</button>
                </form>
            </div>
            
        </div>
    </div>
    </div>
    )
}
export default LoginRegister;