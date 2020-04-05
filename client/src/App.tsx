import React from 'react';
import './App.css';
import LandingHeader from './components/landing/LandingHeader'
import TopNavBar from './components/app-bar/TopNavBar';
import AboutSection from './components/about/AboutSection';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <LandingHeader />
      <AboutSection />
    </div>
  );
}

export default App;
