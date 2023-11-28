import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import supabase from '../../supa/supabase/supabaseClient';

const Conditions = () => {
  const location = useLocation();
  const query = location.state?.query;
  const [conditionsData, setConditionsData] = useState([]);

  useEffect(() => {
    getConditions();
  }, [query]);

  const getConditions = async () => {
    let { data: conditions } = await supabase
      .from('tblMentalHealthConditions')
      .select()
      .textSearch('fts', query);

    setConditionsData(conditions);
  };

  return (
    <div>
      <p>showing results for {query}</p>
      {conditionsData.map((condition) => (
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
      ))}
    </div>
  );
};

export default Conditions;
