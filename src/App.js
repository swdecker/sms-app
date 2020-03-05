import React from 'react';

import './App.css';
import SendSMS from './components/SendSMS';
import SMSHistory from './components/SMSHistory'

function App() {
  return (
    <div className="App">
      <h1>SMS sending and Receiving application</h1>
      <SendSMS />
      <SMSHistory />
    </div>
  );
}

export default App;
