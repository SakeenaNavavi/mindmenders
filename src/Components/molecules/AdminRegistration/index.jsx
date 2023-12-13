import {Container} from "react-bootstrap";
import supabase from "../../../supa/supabase/supabaseClient";
import { useState } from "react";
const AdminRegistration=()=>{
    const [FormData, setFormData] = useState({
        F_Name: '',
        L_Name: '',

        Email: '',
        password: '',
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
      };
    const gatDataIntoSupabase = async (e) => {
        e.preventDefault();
        //const formData = new FormData(e.target);
        console.log(e.target);
    
        const F_Name = document.getElementById('F_Name').value;
        const L_Name = document.getElementById('L_Name').value;

        const Email = document.getElementById('Email').value;
        const password = document.getElementById('password').value;
    
        const formDataToUpdateSupabase = {
          F_Name,
          L_Name,

          Email,
          password,
    
        };
    
        await insertDataIntoSupabase(formDataToUpdateSupabase);
      };
    
      const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
        try {
          const { data, error } = await supabase.from('tblAdmin').insert([
            {
              F_Name: formDataToUpdateSupabase.F_Name,
              L_Name: formDataToUpdateSupabase.L_Name,

              Email: formDataToUpdateSupabase.Email,
              password: formDataToUpdateSupabase.password,
            },
          ]);
    
          if (error) {
            alert('Error inserting data into Supabase: ' + error.message);
          } else {
            alert('A new Admin is successfully registered!');
          }
    
        } catch (error) {
          console.log('Error connecting to Supabase: ' + error.message);
        }
      };
    return (
        <Container>
            <form  onSubmit={gatDataIntoSupabase}>
                <label><span>First Name</span></label>
                <input type="text" id="F_Name" name='F_Name' onChange={handleInputChange} required/>
                <label>
                <span>Last name</span></label>
              <input type="text" id="L_Name" name="L_Name" required />
              
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
        </Container>
    )
}
export default AdminRegistration;