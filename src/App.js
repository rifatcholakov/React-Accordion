import React, { useEffect, useRef, useState } from 'react';

import Accordion from './components/Accordion';
import Error from './components/Error';

import './App.css';

function App() { 
    const [questions, setQuestions] = useState([]);
    const [err, setErr] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    'https://opentdb.com/api.php?amount=10&category=18'
                );
                const data = await response.json();
                setQuestions(data.results);
            } catch(error) {
                setErr(error.message);
            }
        }
        fetchData();
    }, []);

  return (
      <div className="app">
          <div className="faqs">
              <h1 className="title">
                  The GREAT Questions
              </h1>
                <Error error={err} />
              {!questions.length && !err
                  ? 'Wait! The GREAT questions are comming...'
                  : questions.map(item => <Accordion key={item.question} item={item} />)
                }
          </div>
      </div>
  );
}

export default App;
