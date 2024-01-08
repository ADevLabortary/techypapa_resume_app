// pages/index.js

import Features from '../components/landingPage/Features';
import Hero from '../components/landingPage/Hero';
import HowItWorks from '../components/landingPage/HowItWorks';
import Header from '../components/shared/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features/>
      <HowItWorks />
      {/* Your home page content goes here */}
    </div>
  );
};

export default Home;
