import { useEffect, useState } from 'react';
import { supabase } from './your-supabase-config-file';
const supabaseUrl = 'https://brxyhorsxcsfbiivubin.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyeHlob3JzeGNzZmJpaXZ1YmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxNjAyMTQsImV4cCI6MjAxNDczNjIxNH0._RS1Z6BydY99zFyVtseR1HKH_KNVSOU1IsPj7i019l0'; 

const supabase = createClient(supabaseUrl, supabaseKey);
const Conditions = () => {
  const [conditionsData, setConditionsData] = useState([]);
  const [symptomsData, setSymptomsData] = useState([]);

  useEffect(() => {
    const fetchConditionsData = async () => {
      try {
        const { data, error } = await supabase
          .from('tblMentalHealthConditions')
          .select('Condition_name, Description');

        if (error) {
          throw error;
        }

        setConditionsData(data);
      } catch (error) {
        console.error('Error fetching conditions data:', error.message);
      }
    };

    const fetchSymptomsData = async () => {
      try {
        const { data, error } = await supabase
          .from('tblSymptoms')
          .select('Symptoms');

        if (error) {
          throw error;
        }

        setSymptomsData(data);
      } catch (error) {
        console.error('Error fetching symptoms data:', error.message);
      }
    };

    fetchConditionsData();
    fetchSymptomsData();
  }, []);

  return (
    <div>
      <h1>Data from tblMentalHealthConditions</h1>
      <ul>
        {conditionsData.map((item) => (
          <li key={item.id}>
            <h3>{item.Condition_name}</h3>
            <p>{item.Description}</p>
          </li>
        ))}
      </ul>

      <h1>Data from tblSymptoms</h1>
      <ul>
        {symptomsData.map((item) => (
          <li key={item.id}>
            <h3>{item.Symptoms}</h3> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;

