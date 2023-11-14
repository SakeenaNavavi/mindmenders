import React, { useEffect } from 'react';
import './index.css';
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
    return (
        <div className="container">
    <div class="cont">
        <div class="form sign-in">
            <h2>Welcome</h2>
            <label>
                <span>Email</span>
                <input type="email" />
            </label>
            <label>
                <span>Password</span>
                <input type="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" className="btn btn-success submit">Sign In</button>
         
        </div>
        <div class="sub-cont">
            <div class="img">
                <div class="img__text m--up">
                 
                    <h3>You’re just one step away from joining us! <br/><br/>Create your account and explore our features!</h3>
                </div>
                <div class="img__text m--in">
                
                    <h3>If you already have an account, just sign in.</h3>
                </div>
                <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                    <span class="m--in">Sign In</span>
                </div>
            </div>
            <div class="form sign-up">
                <h2>Create your Account</h2>
                <label>
                    <span>First name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Last name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Date of Birth</span>
                    <input type="date" className="form-control"/>
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" />
                </label>
                <button type="button" className="btn btn-success submit">Sign Up</button>
                
            </div>
        </div>
    </div>
    </div>
    )
}
export default LoginRegister;