import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';

// cSpell: disable
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/customsoftware' element={<CustomSoftware />} />
          <Route path='/mobileapps' element={<MobileApps />} />
          <Route path='/websites' element={<Websites />} />
          <Route path='/revolution' element={<TheRevolution />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/estimate' element={<Estimate />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const Home = () => {
  return <div>Home</div>;
};

const Services = () => {
  return <div>Services</div>;
};

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
