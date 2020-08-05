import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavProvider } from './context/ResponsiveNav';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Community from './components/Community/Community';
import Contact from './components/Contact/Contact';
import ContactSuccess from './components/Contact/ContactSuccess';
import Apply from './components/Apply/Apply';
import ApplicationSuccess from './components/Apply/ApplicationSuccess';
import ScrollToTop from './components/utilities/ScrollToTop';
import './styles/styles.css';
import '../node_modules/focus-visible/dist/focus-visible.min.js';

const App = () => {
  return (
    <NavProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/community" component={Community} />
          <Route path="/contact" component={Contact} />
          <Route path="/contact-success" component={ContactSuccess} />
          <Route path="/apply" component={Apply} />
          <Route path="/application-success" component={ApplicationSuccess} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </NavProvider>
  );
};

export default App;
