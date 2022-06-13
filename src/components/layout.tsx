import React from 'react';
import Banner from './banner';
import Header from './header';
import Footer from './footer';
import GlobalStyle from './global-style';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
