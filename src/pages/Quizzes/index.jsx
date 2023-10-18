import React, { useState } from 'react';

const Quizzes = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);

  return (
    <div>
      <br />
      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered1 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered1 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive' }}>
          01."Depression, a mental health challenge, brings persistent sadness and a loss of interest, impacting daily life. Don't face it alone; let's explore and discuss with empathy and understanding."
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>
      
      <br />
      
      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered2 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered2 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive' }}>
          02."Stress is a common response to life's challenges, affecting well-being. We can explore this experience and emotional health together through quizzes, promoting understanding and support."
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />
      
      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered3 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered3 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          03."Insomnia, a sleep disorder causing difficulty in falling or staying asleep, can affect emotional well-being. If you've faced insomnia, let's explore solutions and take a depression quiz together for better understanding and support."
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered4 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered4 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered4(true)}
        onMouseLeave={() => setIsHovered4(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          04."Overthinking, a common mental habit involving excessive analysis, can impact emotional well-being. If you've been caught in overthinking, let's explore strategies and take a depression quiz together to enhance understanding and support."
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f'}}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered5 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered5 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered5(true)}
        onMouseLeave={() => setIsHovered5(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          05."Addictions, compulsive behaviors disrupting daily life, can challenge mental well-being. If you're struggling with addictions, let's have a conversation. Are you ready to take a depression quiz, exploring emotional well-being together?"
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered6 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered6 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered6(true)}
        onMouseLeave={() => setIsHovered6(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          06."Eating disorders, characterized by unhealthy eating behaviors, can impact emotional well-being. If you're dealing with eating disorders, let's have a conversation. Are you interested in taking a eating disorders quiz to explore emotional well-being together?"
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered7 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered7 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered7(true)}
        onMouseLeave={() => setIsHovered7(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          07."Bipolar and mood disorders, characterized by extreme mood swings, can impact emotional well-being. If you're experiencing these challenges, let's connect. Are you ready to take a Bipolar and Other mood disoders quiz, exploring emotional well-being together?"
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered8 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered8 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered8(true)}
        onMouseLeave={() => setIsHovered8(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          08."Phobias, marked by intense irrational fears, can affect emotional well-being. If you're struggling with phobias, let's have a conversation. Are you ready for a phobias quiz, exploring emotional well-being together?"
        </h5>
        <a href="your_target_page_url_here">
          <button style={{ width: '175px', height: '40px',backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>
        </a>
      </div>

      <br />

      <div
        style={{
          border: '1px solid #000',
          width: '1200px',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
          backgroundColor: isHovered9 ? '#90EE90' : 'white',
          transition: 'background-color 0.3s',
          color: isHovered9 ? '#006400' : 'black',
          borderRadius: '10px',
        }}
        onMouseEnter={() => setIsHovered9(true)}
        onMouseLeave={() => setIsHovered9(false)}
      >
        <h5 className="text-box-header" style={{ textAlign: 'left',fontFamily:'Lobster, cursive'  }}>
          09."ADHD, characterized by focus and impulsivity challenges, can impact emotional well-being. If you're living with ADHD, let's share experiences. Are you ready to take ADH quiz, exploring emotional well-being together?"
        </h5>
        <a href="your_target_page_url_here">
        <button style={{ width: '175px', height: '40px', backgroundColor: '#F4F4EB', color: '#26580f' }}>MindfulQuiz</button>

        </a>
      </div>

      <br />

      
    </div>
    
  );
};

export default Quizzes;
