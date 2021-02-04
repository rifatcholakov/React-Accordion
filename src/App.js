import React from 'react';

import Accordion from './components/Accordion';

import './App.css';

const data = [
    {
        id: '1',
        title: 'How to order your service?',
        content: `<p>You can't! It's for special people.</p>`
    },
    {
        id: '2',
        title: 'How do you charge for the cost?',
        content: `We can't tell you!`
    },
    {
        id: '3',
        title: 'Can I get gurantee of your service?',
        content: 'No!'
    },
    {
        id: '4',
        title: 'Do you accept work out of UK area?',
        content: 'Nope!'
    },
    {
        id: '5',
        title: 'Is this included with interior design?',
        content: 'Of course Not!'
    }
];

function App() { 

  return (
      <div className="app">
          <div className="faqs">
            <h1 className="title">FAQ</h1>
            {data.map(item => (
                <Accordion item={item} />
            ))}
          </div>
      </div>
  );
}

export default App;
