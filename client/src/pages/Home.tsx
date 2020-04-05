import React from 'react';
import LandingHeader from '../components/landing/LandingHeader';
import AboutSection from '../components/about/AboutSection';
import FooterSection from '../components/footer/FooterSection';

export default function Home() {

  return (
    <div>
      <LandingHeader />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
