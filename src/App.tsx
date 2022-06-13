import React from 'react';
import Layout from './components/layout';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Interest from './components/interest';
import WealthGrowing from './components/wealth-growing';
import QuoteCarousel from 'components/quote-carousel';
import EarningSimulator from './components/earning-simulator';
import CryptoSteps from './components/crypto-steps';
import Faq from './components/faq';

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Interest />
      <WealthGrowing />
      <EarningSimulator />
      <CryptoSteps />
      <QuoteCarousel />
      <Faq />
    </Layout>
  );
};

export default App;
