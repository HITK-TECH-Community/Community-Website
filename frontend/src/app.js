import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// Pages Import
import Home from "./components/home/home";
import JoinUsForm from "./components/home/join_us/join_us_form/form";
import Broadcasts from "./components/broadcast/broadcasts";
import AllBroadcasts from "./components/broadcast/all_broadcasts/all_broadcasts";
import Footer from "./components/footer/footer";
import GetInvolved from "./components/get_involved/get_involved";

import "./app.css";

// Component
import { Navbar } from "./components/Navbar/index";
// import AddFaq from "./components/admin/faq/add_faq/add_faq";
import { ScrollTop } from "./components/util/ScrollToTop/index";

// Pages
import { Terms } from "./pages/Terms/index";
import { About } from "./pages/About";
import { NotFound } from "./pages/404";
import { Login } from "./pages/Login/index";
import { ContactUs } from "./pages/ContactUs/index";
import { Admin } from "./pages/Admin";
import { Setting } from "./pages/Admin/Components/Setting";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/index";
import { Resources } from "./pages/Resources/index";
import { Faq } from "./pages/Faq";

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
            <Route exact path="/faqs" component={Faq} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/dashboard" component={Admin} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/get-involved" component={GetInvolved} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/join_us_form" component={JoinUsForm} />
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
