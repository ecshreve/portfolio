import React from 'react';
import './App.css';
import LandingHeader from './components/landing/LandingHeader'
import TopNavBar from './components/app-bar/TopNavBar';

function App() {
  return (
    <div className="App">
      <TopNavBar></TopNavBar>
      <LandingHeader></LandingHeader>
    </div>
  );
}

export default App;
