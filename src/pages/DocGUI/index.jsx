import React, { useState, useEffect } from 'react';
import { Col} from 'react-bootstrap';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faImage, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from '../../Components/molecules/Navbar';
library.add(faCamera, faImage, faCog, faQuestionCircle);
const DocGUI = () => {
  
  // Consultant Form State
  const [consultantFormData, setConsultantFormData] = useState({


    Questionnaire_type: '',
  });

  const [QuestionnaireSubmittedData, setQuestionnaireSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedQuestionnaireData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [formData, setFormData] = useState({
    Description: '',
    Condition_name: '',
    Symptoms:'',
    Strategies:'',
  });

  const [submittedData, setSubmittedData] = useState(() => {
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


  const [QuestionsSubmittedData, setQuestionsSubmittedData] = useState(() => {
    const storedData = localStorage.getItem('submittedQuestionsData');
    return storedData ? JSON.parse(storedData) : [];
  });

  // Common Form Change Handler
  const handleFormChange = (e, setFormData) => {
    setFormData({
      ...setFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Consultant Form Submit Handler
  const handleQuestionnaireSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete logic if needed
    } else {
      try {
        const { data, error } = await supabase
          .from('tblQuestionnaire')
          .upsert([
            {
              Questionnaire_type: consultantFormData.Questionnaire_type,
            },
          ]);

        if (error) {
          console.error('Error inserting data into Supabase:', error.message);
        } else {
          console.log('Data inserted into Supabase:', data);
          setQuestionnaireSubmittedData([...QuestionnaireSubmittedData, consultantFormData]);
          localStorage.setItem('submittedQuestionnaireData', JSON.stringify([...QuestionnaireSubmittedData, consultantFormData]));
        }
      } catch (error) {
        console.error('Error inserting data into Supabase:', error.message);
      }
    }

    setConsultantFormData({
      Questionnaire_type: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


      const { data, error } = await supabase
        .from('tblMentalHealthConditions')
        .upsert([
          {
            Description: formData.Description,
            Condition_name: formData.Condition_name,
            Symptoms: formData.Symptoms,
            Strategies: formData.Strategies,
          },
        ]);

      if (error) {


      // Validate that Description is not null or empty before submitting
      if (!formData.Description) {
        console.error('Description is required.');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('tblMentalHealthConditions')
          .upsert([
            {
              Condition_name: formData.Condition_name,
              Description: formData.Description,
              Symptoms: formData.Symptoms,
              Strategies: formData.Strategies,
            },
          ]);

        if (error) {
          console.error('Error inserting data into Supabase:', error.message);
        } else {
          console.log('Data inserted into Supabase:', data);
          localStorage.setItem('submittedMentalHealthData', JSON.stringify([...submittedData, formData]));
        }
      } catch (error) {

        console.error('Error inserting data into Supabase:', error.message);
      } 

      setSubmittedData([...submittedData, formData]);
      localStorage.setItem('submittedData', JSON.stringify([...submittedData, formData]));
    }


    setFormData({

      Description: '',
      Condition_name: '',
      Symptoms:'',
      Strategies:'',
    });
  };



// Filter mental health conditions based on search input
const filteredData = Array.isArray(submittedData)
  ? submittedData.filter((mentalHealthCondition) =>
      mentalHealthCondition &&
      mentalHealthCondition.Description &&
      mentalHealthCondition.Description.toLowerCase().includes(searchInput.toLowerCase())
    )
  : [];


  const [formSelfHelpStrategiesData, setFormSelfHelpStrategiesData] = useState({
    Strategy: '',
  });

  const [submittedSelfHelpStrategiesData, setSubmittedSelfHelpStrategiesData] = useState(() => {
    const storedData = localStorage.getItem('submittedSelfHelpStrategiesData');
    return storedData ? JSON.parse(storedData) : [];
  });


  const [searchSelfHelpStrategiesInput, setSearchSelfHelpStrategiesInput] = useState('');

  const handleSelfHelpStrategiesChange = (e) => {
    setFormSelfHelpStrategiesData({
      ...formSelfHelpStrategiesData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelfHelpStrategiesSubmit = async (e, deleteCard = false) => {
    e.preventDefault();

    if (deleteCard) {
      // Handle delete card logic if needed
    } else {
      const { data, error } = await supabase
        .from('tblSelfHelpStrategies')
        .upsert([
          {
            Strategy: formSelfHelpStrategiesData.Strategy,
          },
        ]);

      if (error) {
        console.error('Error inserting data into Supabase:', error.message);
      } else {
        console.log('Data inserted into Supabase:', data);
      }

      setSubmittedSelfHelpStrategiesData([...submittedSelfHelpStrategiesData, formSelfHelpStrategiesData]);
      localStorage.setItem(
        'submittedSelfHelpStrategiesData',
        JSON.stringify([...submittedSelfHelpStrategiesData, formSelfHelpStrategiesData])
      );
    }

    setFormSelfHelpStrategiesData({
      Strategy: '',
    });
  };

  const [contacts, setContacts] = useState([]);

  // Filter self-help strategies based on search input
  const filteredSelfHelpStrategiesData = submittedSelfHelpStrategiesData.filter((selfHelpStrategies) =>
    selfHelpStrategies &&
    selfHelpStrategies.Strategy &&
    selfHelpStrategies.Strategy.toLowerCase().includes(searchSelfHelpStrategiesInput.toLowerCase())
  );

  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contactId) => {
    const selectedContact = contacts.find((contact) => contact.id === contactId);
    setSelectedContact(selectedContact);
  };



  return (
    <div>
      <Navbar />
    <div className="website-container-drgui">

        <Col>
        
        <h1 className="doctorh1gui"> Mindmenders:Graphical User Interface</h1>
          {/* Form for adding new mental health conditions */}
          <form className="Doctorform" onSubmit={handleSubmit}>

            <label className="Doctorformlabel">
              Description:
              <input
                className="Doctorforminput"
                type="text"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="Doctorformlabel">
              Condition_name:
              <input
                className="Doctorforminput"
                type="text"
                name="Condition_name"
                value={formData.Condition_name}
                onChange={handleChange}
              />
            </label>
            <label className="Doctorformlabel">
            Symptoms:
              <input
                className="Doctorforminput"
                type="text"
                name="Symptoms"
                value={formData.Symptoms}
                onChange={handleChange}
              />
            </label>
            <label className="Doctorformlabel">
            Strategies:
              <input
                className="Doctorforminput"
                type="text"
                name="Strategies"
                value={formData.Strategies}
                onChange={handleChange}
              />
            </label>
            <div className="button-container-Doctorform">
              <button className="Doctorformbutton" type="submit">
                Add
              </button>
            </div>
          </form>


          <form className="Doctorformq" onSubmit={handleQuestionnaireSubmit}>
            <label className="Doctorformlabelq">
              Questionnaire_type:
              <input
                className="Doctorforminputq"
                type="text"
                name="Questionnaire_type"
                value={consultantFormData.Questionnaire_type}
                onChange={(e) => handleFormChange(e, setConsultantFormData)}
              />
            </label>
            <div className="button-container-Doctorformq">
              <button className="Doctorformbuttonq" type="submit">
                Add Question
              </button>
            </div>
          </form>

        </Col>
      
        </div>
    </div>
  );
};

export default DocGUI;
