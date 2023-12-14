// Conditions.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from '../../Components/molecules/Navbar/index.jsx';
import './index.css';

const ConditionsCard = (props) => {
  const { Description, Condition_name,Symptoms,Strategies } = props;

  return (
    <div className="box-ConditionsCard">
      <h1 className="text-box-ConditionsCard-header1">{Condition_name} </h1> 
      <h5 className="text-box-ConditionsCard-header">
        {Description} <br /> <br />Symptoms: {Symptoms} <br /> <br /> Strategies: {Strategies}
      </h5>
    </div>
  );
};

const Conditions = () => {
  const [conditions, setConditions] = useState([]);
  const { state } = useLocation();
  const searchQuery = state ? state.query : '';

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('tblMentalHealthConditions')
        .select('*')
        .ilike('Condition_name', `%${searchQuery}%`); // Use ilike for case-insensitive search

      if (error) {
        console.error('Error fetching data from Supabase:', error);
      } else {
        setConditions(data);
      }
    } catch (error) {
      console.error('Error fetching data from Supabase:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <h1 className="h1">Mind Matters: Mental Health Condition</h1>

      {conditions.map((condition, index) => (
        <ConditionsCard
          key={index}
          Condition_name={condition.Condition_name}
          Description={condition.Description}
          Symptoms={condition.Symptoms}
          Strategies={condition.Strategies}
        />
      ))}

      <br />
    </div>
  );
};

export default Conditions;
