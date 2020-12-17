import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
// Pages Import
import Home from './components/pages/home';
import AboutUs from './components/pages/about_us';
import Broadcasts from './components/pages/broadcasts';
import Resources from './components/pages/resources';
import ContactUs from './components/pages/contact_us';
import Admin from './components/pages/admin';
import Faqs from './components/pages/faqs';
import NotFound from './components/pages/not_found';

import './app.css';

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
