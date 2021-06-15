/* eslint-disable */
import React from 'react';
import Nav from './Nav';
import Title from './pages/Title';
const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box office"
        subtitle="are you looking for a movie or an actor?"
      ></Title>
      <Nav />

      {children}
    </div>
  );
};

export default MainPageLayout;
