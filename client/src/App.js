import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Apply from './components/Apply';
import Community from './components/Community';
import Contact from './components/Contact';
import './styles/styles.css';

const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/community" component={Community} />
        <Route path="/apply" component={Apply} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
