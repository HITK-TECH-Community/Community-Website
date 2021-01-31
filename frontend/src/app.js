import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// Pages Import
import ScrollTop from "./components/util/scroll_to_top/scroll_to_top";
import Home from "./components/home/home";
import AboutUs from "./components/about/about_us";
import Broadcasts from "./components/broadcast/broadcasts";
import AllBroadcasts from "./components/broadcast/all_broadcasts/all_broadcasts";
import Resources from "./components/resource/resources";
import ContactUs from "./components/contact/contact_us";
import Admin from "./components/admin/admin";
import Faqs from "./components/faq/faq";
import NotFound from "./components/404/not_found";
import Dashboard from "./components/admin/dashboard/dashboard";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Terms from "./components/terms/terms";
import GetInvolved from "./components/get_involved/get_involved";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import Setting from "./components/admin/setting/setting";
import "./app.css";

const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/Broadcasts">
              <Broadcasts />
            </Route>
            <Route exact path="/all-broadcasts" component={AllBroadcasts} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/get-involved" component={GetInvolved} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <ScrollTop />
      <Footer className="Footer" />
    </Fragment>
  );
};

export default App;
