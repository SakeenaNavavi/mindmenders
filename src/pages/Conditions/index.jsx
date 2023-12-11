import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import supabase from '../../supa/supabase/supabaseClient';
import Navbar from '../../Components/molecules/Navbar/index.jsx';

const Conditions = () => {
  const [conditionsData, setConditionsData] = useState([]);
  return (
    <div>
      <Navbar />
    
      {conditionsData && Array.isArray(conditionsData) ? (
        conditionsData.map((condition) => (
          <div key={condition.Condition_id}>
            <h3>{condition.Condition_name}</h3>
            <p>{condition.Description}</p>

            {/* Fetch and display symptoms */}
            {condition.symptoms && condition.symptoms.length > 0 && (
              <>
                <h4>Symptoms</h4>
                <ul>
                  {condition.symptoms.map((symptom) => (
                    <li key={symptom.Symptom_id}>{symptom.Symptoms}</li>
                  ))}
                </ul>
              </>
            )}

            {condition.selfHelpStrategies && condition.selfHelpStrategies.length > 0 && (
              <>
                <h4>Self-Help Strategies</h4>
                <ul>
                  {condition.selfHelpStrategies.map((strategy) => (
                    <li key={strategy.Strategy_id}>{strategy.Strategy}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No conditions data available.</p>
      )}
    </div>
  );
};

export default Conditions;