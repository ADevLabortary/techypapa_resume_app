// pages/index.js

import CTA from '../components/landingPage/CTA';
import FeaturedTemplates from '../components/landingPage/FeaturedTemplates';
import Features from '../components/landingPage/Features';
import Hero from '../components/landingPage/Hero';
import HowItWorks from '../components/landingPage/HowItWorks';
import Testimonials from '../components/landingPage/Testimonials';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features id='features'/>
      <HowItWorks />
      <Testimonials />
      <FeaturedTemplates/>
      <CTA />
      <Footer />
      {/* Your home page content goes here */}
    </div>
  );
};

export default Home;
