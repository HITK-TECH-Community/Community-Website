import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
// Pages Import
import Home from './components/home/home';
import AboutUs from './components/about/about_us';
import Broadcasts from './components/broadcast/broadcasts';
import Resources from './components/resource/resources';
import ContactUs from './components/contact/contact_us';
import Admin from './components/admin/admin';
import Faqs from './components/faq/faqs';
import Contact from './components/contact/Design1'
import NotFound from './components/404/not_found';
import 'semantic-ui-css/semantic.min.css'

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
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Footer className='Footer' />
    </Fragment>
  );
};

export default App;
