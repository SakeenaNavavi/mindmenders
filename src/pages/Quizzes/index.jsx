import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Quizzes = () => {
 
  return (
    <div>
      <br />
      <h1 className="h1">Mind Matters: Mental Health Quizzes</h1>
      <div div className="box">
        <h5 className="text-box-header" >
          01.Depression, a mental health challenge, brings persistent sadness and a loss of interest, impacting daily life. Don't face it alone; let's explore and discuss with empathy and understanding.
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
    <b> Get Started</b>
  </button>
</Link>
      </div>
      
      <br />
      
      <div div className="box">
       
      
        <h5 className="text-box-header" >
          02.Stress is a common response to life's challenges, affecting well-being. We can explore this experience and emotional health together through quizzes, promoting understanding and support.
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton" >
  <b> Get Started</b>
  </button>
</Link>
      </div>

      <br />
      
      <div div className="box">
        
      
        <h5 className="text-box-header" >
          03.Insomnia, a sleep disorder causing difficulty in falling or staying asleep, can affect emotional well-being. If you've faced insomnia, let's explore solutions and take a Insomnia quiz together for better understanding and support.
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton" >
  <b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          04.Overthinking, a common mental habit involving excessive analysis, can impact emotional well-being. If you've been caught in overthinking, let's explore strategies and take a Overthinking quiz together to enhance understanding and support.
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
  <b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header">
          05.Addictions, compulsive behaviors disrupting daily life, can challenge mental well-being. If you're struggling with addictions, let's have a conversation. Are you ready to take a Addictions quiz, exploring emotional well-being together?
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
  <b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          06.Eating disorders, characterized by unhealthy eating behaviors, can impact emotional well-being. If you're dealing with eating disorders, let's have a conversation. Are you interested in taking a eating disorders quiz to explore emotional well-being together?
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
  <b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
       
      
        <h5 className="text-box-header" >
          07.Bipolar and mood disorders, characterized by extreme mood swings, can impact emotional well-being. If you're experiencing these challenges, let's connect. Are you ready to take a Bipolar and Other mood disoders quiz, exploring emotional well-being together?
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
<b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
      
      
        <h5 className="text-box-header" >
          08.Phobias, marked by intense irrational fears, can affect emotional well-being. If you're struggling with phobias, let's have a conversation. Are you ready for a phobias quiz, exploring emotional well-being together?
        </h5>
        <Link to="/add-quizzes">
  <button className="qbutton">
<b> Get Started</b>
  </button>
</Link>
      </div>

      <br />

      <div div className="box">
        <h5 className="text-box-header" >
  09.ADHD, characterized by focus and impulsivity challenges, can impact emotional well-being. If you're living with ADHD, let's share experiences. Are you ready to take ADH quiz, exploring emotional well-being together?
</h5>
<Link to="/add-quizzes">
  <button className="qbutton">
  <b> Get Started</b>
  </button >
</Link>
      </div>

      <br />
      <div div className="box">
      <h5 className="text-box-header" >
     10. Anxiety, a common mental health challenge, can significantly impact emotional well-being. If you're dealing with anxiety and seeking support, let's start a conversation. Are you ready to take an anxiety quiz and explore your emotional well-being together?
</h5>
<Link to="/add-quizzes">
  <button className="qbutton">
  <b> Get Started</b>
  </button>
  
</Link>
      </div>
      <br />
    </div>
    
  );
};
export default Quizzes;
