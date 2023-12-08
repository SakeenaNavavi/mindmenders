import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from "../../Components/molecules/AdminNavbar/index.jsx";
import './adminindex.css'; // Import your existing CSS file

const AdminProfessionalDirectory = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Bio: '',
    Specialization: '',
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

  const handleSubmit = (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Check if the entered name matches any of the names on the cards
      const matchingProfessional = submittedData.find(
        (professional) => professional.Name.toLowerCase() === formData.Name.toLowerCase()
      );

      if (matchingProfessional) {
        // Delete card by filtering out the matching professional and updating state
        const updatedData = submittedData.filter(
          (professional) => professional !== matchingProfessional
        );
        setSubmittedData(updatedData);
        // Save updated data to localStorage
        localStorage.setItem('submittedData', JSON.stringify(updatedData));
      } else {
        // Handle the case when names don't match
        alert(`No professional found with the name ${formData.Name}`);
      }
    } else {
      // Process the form data as needed (e.g., send to server, update state, etc.)
      // For now, just update the state to simulate form submission
      setSubmittedData([...submittedData, formData]);
      // Save submitted data to localStorage
      localStorage.setItem('submittedData', JSON.stringify([...submittedData, formData]));
    }

    // Clear the form data after submission if needed
    setFormData({
      Name: '',
      Bio: '',
      Specialization: '',
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
          {professional.Name} <br /> {professional.Bio} <br /> {professional.Specialization}
        </h5>
        <button className="admindirectory-button-1">
          <Link to="/AppointmentBooking" className="custom-link">
            Book Now
          </Link>
        </button>
        <br /> <br />
        <div className="chat-button-container">
          <button className="chat-button">
            <Link to="/OnlineCommunity" className="custom-link">
              Chat now
            </Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Form for adding new professionals */}
      <form className="directoryform" onSubmit={handleSubmit}>
        <label className="directoryformlabel">
          Add Name:
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
          Specialization:
          <input
            className="directoryforminput"
            type="text"
            name="Specialization"
            value={formData.Specialization}
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
