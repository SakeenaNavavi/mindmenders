import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from "../../Components/molecules/AdminNavbar/index.jsx";
import './adminindex.css'; // Import your existing CSS file
//import Navbar from '../../Components/molecules/Navbar/index.jsx';
import supabase from '../../supa/supabase/supabaseClient';

const AdminProfessionalDirectory = () => {
  const [formData, setFormData] = useState({
    Name: '',
    LastName: '',
    dob: '',
    Email: '',
    password: '',
    Bio: '',
    Location: '',
  });

  const [submittedData, setSubmittedData] = useState(() => {
    // Load submitted data from localStorage on component mount
    const storedData = localStorage.getItem('submittedData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  async(e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
    } else {
      // Insert data into Supabase table
      const { data, error } = await supabase
        .from('tblConsultant')
        .upsert([
          {
            First_Name: formData.Name,
            Last_Name: formData.LastName,
            DOB: formData.dob,
            Email: formData.Email,
            password: formData.password,
            Bio: formData.Bio,
            Location: formData.Location,
          },
        ]);

      if (error) {
        console.error('Error inserting data into Supabase:', error.message);
      } else {
        console.log('Data inserted into Supabase:', data);
        // Update local state with the newly submitted data
        setSubmittedData([...submittedData, formData]);
        // Save submitted data to localStorage
        localStorage.setItem('submittedData', JSON.stringify([...submittedData, formData]));
      }
    }

    // Clear the form data after submission if needed
    setFormData({
      Name: '',
      LastName: '',
      dob: '',
      Email: '',
      password: '',
      Bio: '',
      Location: '',
    });
  };

  useEffect(() => {
    // Uncomment the following lines if you want to clear the data on component unmount
    // return () => {
    //   localStorage.removeItem('submittedData');
    // };
  }, []);

  // Filter professionals based on search input
  const filteredData = submittedData.filter((professional) =>
    professional.Name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <AdminNavbar />
      {/* Search input */}
      <input
        type="text"
        placeholder="Search by Name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      
      {/* Display filtered data in separate cards */}
<div className="admindirectory-card-container">
  {filteredData.map((professional, index) => (
    <div key={index} className="admindirectory-card">
      {/* Display professional data here */}
      <img
        src="https://th.bing.com/th/id/R.b2d02fe7d3dab0051b29eeeda4076a34?rik=uDijpC0gQNgIFg&riu=http%3a%2f%2ficonbug.com%2fdata%2f40%2f507%2fcf6e3c9d010d2af3871e72e49b85cbf6.png&ehk=Nyj%2fexUpynuU%2bPr2dLerIVTK5tuXOrigkmofvHX2b8c%3d&risl=&pid=ImgRaw&r=0"
        alt={professional.Name}
        className="admindirectory-card-image"
      />
      <div className="container-admindirectory">
        <h5 className="admindirectory-card-title">
          {professional.Name} <br /> {professional.LastName} <br /> {professional.dob} <br /> {professional.Email} <br /> {professional.password} <br /> {professional.Bio} <br /> {professional.Location}
        </h5>
     
        </div>
      </div>
   
  ))}
</div>


      {/* Form for adding new professionals */}
      <form className="directoryform" onSubmit={handleSubmit}>
        <label className="directoryformlabel">
          Frist Name:
          <input
            className="directoryforminput"
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="directoryformlabel">
          Last Name:
          <input
            className="directoryforminput"
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="directoryformlabel">
          Date Of Birthday:
          <input
            className="DOB"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="directoryformlabel">
          Email:
          <input
            className="directoryforminput"
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </label>
        <label className="directoryformlabel">
          Pass Word:
          <input
            className="directoryforminput"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="directoryformlabel">
          Bio:
          <input
            className="directoryforminput"
            type="text"
            name="Bio"
            value={formData.Bio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="directoryformlabel">
          Location:
          <input
            className="directoryforminput"
            type="text"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="button-container-admindirectorform">
          <button className="directoryformbutton" type="submit">
            Add
          </button>
          <button className="directoryformbutton" onClick={(e) => handleSubmit(e, true)}>
            Delete
          </button>
        </div>
      </form>
      <br /> <br />
    </div>
  );
};

export default AdminProfessionalDirectory;