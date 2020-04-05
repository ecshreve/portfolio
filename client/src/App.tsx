import React from 'react';
import './App.css';
import LandingHeader from './components/landing/LandingHeader'
import TopNavBar from './components/app-bar/TopNavBar';
import AboutSection from './components/about/AboutSection';
import ContentSection from './components/content-section/ContentSection';
import FooterSection from './components/footer/FooterSection';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <LandingHeader />
      <AboutSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}

export default App;
