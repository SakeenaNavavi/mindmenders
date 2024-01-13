import React, { useState, useEffect } from 'react';
import './index.css';
import supabase from '../../../supa/supabase/supabaseClient';

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
    try {
      const storedData = localStorage.getItem('submittedData');
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error('Error parsing submittedData from localStorage:', error);
      return [];
    }
  });

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      setSubmittedData((prevData) => {
        const newData = [...prevData, formData];
        localStorage.setItem('submittedData', JSON.stringify(newData));
        return newData;
      });

      // Clear the form data after successful submission
      setFormData({
        Name: '',
        LastName: '',
        dob: '',
        Email: '',
        password: '',
        Bio: '',
        Location: '',
      });
    }
  };

  useEffect(() => {
    // Uncomment the following lines if you want to clear the data on component unmount
    // return () => {
    //   localStorage.removeItem('submittedData');
    // };
  }, []);

  const filteredData = (submittedData)
  submittedData.filter((professional) =>
  professional&&
  professional.Name&&
    professional.Name.toLowerCase().includes(searchInput.toLowerCase())
  )
  

  return (
    <div>
      <div className="admindirectory-card-container">
        {filteredData.map((professional, index) => (
          <div key={index} className="admindirectory-card">
            <img
              src="https://th.bing.com/th/id/R.b2d02fe7d3dab0051b29eeeda4076a34?rik=uDijpC0gQNgIFg&riu=http%3a%2f%2ficonbug.com%2fdata%2f40%2f507%2fcf6e3c9d010d2af3871e72e49b85cbf6.png&ehk=Nyj%2fexUpynuU%2bPr2dLerIVTK5tuXOrigkmofvHX2b8c%3d&risl=&pid=ImgRaw&r=0"
              alt={professional.Name}
              className="admindirectory-card-image"
            />
            <div className="container-admindirectory">
              <h5 className="admindirectory-card-title">
                {professional.Name} <br /> {professional.LastName} <br /> {professional.dob} <br /> {professional.Email}{' '}
                <br /> {professional.password} <br /> {professional.Bio} <br /> {professional.Location}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <form className="directoryform" onSubmit={handleSubmit}>
     
  <label className="directoryformlabel">
    First Name:
    <input
      className="directoryforminput"
      type="text"
      name="Name"
      value={formData.Name}
      onChange={handleChange}
    />
  </label>
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
  <label className="directoryformlabel">
    Date Of Birthday:
    <input
      className="directoryforminput"
      type="date"
      name="dob"
      value={formData.dob}
      onChange={handleChange}
    />
  </label>
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
    Password:
    <input
      className="directoryforminput"
      type="text"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />
  </label>
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

        <div className="button-container-admindirectorform">
          <button className="directoryformbutton" type="submit">
            Add
          </button>
          {/* Remove the onClick event from the Delete button */}
          <button className="directoryformbutton" type="button">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfessionalDirectory;

