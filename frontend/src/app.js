import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages Import
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Broadcasts from './components/pages/Broadcasts';
import Resources from './components/pages/Resources';
import ContactUs from './components/pages/ContactUs';
import Admin from './components/pages/Admin';
import Faqs from './components/pages/Faqs';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <Fragment>
      <div className='Container'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about-us' component={AboutUs} />
            <Route exact path='/broadcasts' component={Broadcasts} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/contact-us' component={ContactUs} />
            <Route exact path='/faqs' component={Faqs} />
            <Route exact path='/admin' component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Footer className='Footer' />
    </Fragment>
  );
};

export default App;
