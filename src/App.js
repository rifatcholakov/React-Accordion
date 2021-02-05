import React, { useEffect, useState } from 'react';

import Accordion from './components/Accordion';

import './App.css';

function App() { 
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://opentdb.com/api.php?amount=10&category=18'
            );
            const data = await response.json();
            setQuestions(data.results);
        }
        fetchData();
    }, []);

  return (
      <div className="app">
          <div className="faqs">
              <h1 className="title">
                  The GREAT Questions
              </h1>
              {!questions.length
                  ? 'Wait! The GREAT questions are comming...'
                  : questions.map(item => <Accordion item={item} />)
                }
          </div>
      </div>
  );
}

export default App;
