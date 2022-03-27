import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path='/'
            element={
              <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />
            }
          />
          <Route
            path='/services'
            element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route path='/customsoftware' element={<CustomSoftware />} />
          <Route path='/mobileapps' element={<MobileApps />} />
          <Route path='/websites' element={<Websites />} />
          <Route path='/revolution' element={<TheRevolution />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/estimate' element={<Estimate />} />
        </Routes>
        <Footer selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

// const Home = () => {
//   return <div style={{ height: '2000px' }}>Home</div>;
// };

const CustomSoftware = () => {
  return <div>Custom Software</div>;
};

const MobileApps = () => {
  return <div>Mobile Apps</div>;
};

const Websites = () => {
  return <div>Websites</div>;
};

const TheRevolution = () => {
  return <div>The Revolution</div>;
};

const AboutUs = () => {
  return <div>About Us</div>;
};

const ContactUs = () => {
  return <div>Contact Us</div>;
};

const Estimate = () => {
  return <div>Estimate</div>;
};

export default App;
