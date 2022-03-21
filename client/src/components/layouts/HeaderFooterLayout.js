import React from 'react';
import Header from 'base/Header';
import Footer from 'base/Footer';

const HeaderFooterLayout = (props) => {
  return (
    <div className="mx-auto m-0 h-auto w-full bg-theme-gray min-h-[780px] min-w-[900px]">
      <Header />
      {props?.children}
      <Footer />
    </div>
  )
};

export default HeaderFooterLayout;