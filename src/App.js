import React from 'react';

import './App.css';
import SendSMS from './components/SendSMS';
import SMSHistory from './components/SMSHistory'

function App() {
  const backEndURL='http://localhost:3001/sms_messages/'
  return (
    <div className="App">
      <h1>SMS sending and Receiving application</h1>
      <SendSMS backEndURL={backEndURL} />
      <SMSHistory backEndURL={backEndURL} />
    </div>
  );
}

export default App;
