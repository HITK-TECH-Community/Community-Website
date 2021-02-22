import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// Pages Import
import ScrollTop from "./components/util/scroll_to_top/scroll_to_top";
import Home from "./components/home/home";
import JoinUsForm from "./components/home/join_us/join_us_form/form";
import Broadcasts from "./components/broadcast/broadcasts";
import AllBroadcasts from "./components/broadcast/all_broadcasts/all_broadcasts";
import Resources from "./components/resource/resources";
import Admin from "./components/admin/admin";
import AddBroadcasts from "./components/admin/broadcast/add_broadcasts/add_broadcasts";
import Faqs from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Terms from "./components/terms/terms";
import GetInvolved from "./components/get_involved/get_involved";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import Setting from "./components/admin/setting/setting";
import "./app.css";

// Component
import { Navbar } from "./components/Navbar/index";
import AddFaq from "./components/admin/faq/add_faq/add_faq";
import { ContactUs } from "./components/ContactUs/index";

// Pages
import { About } from "./pages/About";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login/index";

const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/Broadcasts">
              <Broadcasts />
            </Route>
            <Route exact path="/all-broadcasts" component={AllBroadcasts} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/dashboard" component={Admin} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/get-involved" component={GetInvolved} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/join_us_form" component={JoinUsForm} />
            <Route exact path="/add_broadcast" component={AddBroadcasts} />
            <Route exact path="/add_faq" component={AddFaq} />
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
