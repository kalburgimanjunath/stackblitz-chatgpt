import React from 'react';
import './style.css';
import ChatGPT from './components/chatGPT';

export default function App() {
  return (
    <div>
      <header className="App-header">
        <h1>ChatGPT Integration</h1>
      </header>
      <ChatGPT />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
