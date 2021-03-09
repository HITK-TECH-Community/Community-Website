import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./app.css";

// Component
import { JoinUsForm } from "./pages/Home/components/JoinUsForm/index";
import { Navbar } from "./components/Navbar/index";
import { Footer } from "./components/Footer";
// import AddFaq from "./components/admin/faq/add_faq/add_faq";
import { ScrollTop } from "./components/util/ScrollToTop/index";

// Pages
import { Home } from "./pages/Home/index";
import { Terms } from "./pages/Terms/index";
import { About } from "./pages/About";
import { NotFound } from "./components/ErrorHandlerPages/404";
import { LoggedIn } from "./components/ErrorHandlerPages/LoggedIn";
import { Login } from "./pages/Login/index";
import { ContactUs } from "./pages/ContactUs/index";
import { Admin } from "./pages/Admin";
import { Setting } from "./pages/Admin/Components/Setting";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/index";
import { Resources } from "./pages/Resources/index";
import { Faq } from "./pages/Faq";
import { Broadcast } from "./pages/Broadcast/index";
import { AllBroadcasts } from "./pages/Broadcast/Component/AllBroadcasts/index";
import { GetInvolved } from "./pages/GetInvolved";

import { useSelector } from "react-redux";

const App = () => {
  const isSuperAdmin = useSelector((state) => state.isSuperAdmin);

  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Switch>
            {isSuperAdmin ? (
              <Route exact={true} path="/admin" component={LoggedIn} />
            ) : null}

            {isSuperAdmin ? (
              <Route exact={true} path="/dashboard" component={Admin} />
            ) : null}
            <div>
              <Navbar />
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/about-us" component={About} />
                <Route exact={true} path="/Broadcasts" component={Broadcast} />
                <Route
                  exact={true}
                  path="/all-broadcasts"
                  component={AllBroadcasts}
                />
                <Route exact={true} path="/resources" component={Resources} />
                <Route exact={true} path="/contact-us" component={ContactUs} />
                <Route exact={true} path="/faqs" component={Faq} />
                <Route exact={true} path="/admin" component={Login} />
                <Route exact={true} path="/setting" component={Setting} />
                <Route exact={true} path="/terms" component={Terms} />
                <Route
                  exact={true}
                  path="/get-involved"
                  component={GetInvolved}
                />
                <Route
                  exact={true}
                  path="/privacy-policy"
                  component={PrivacyPolicy}
                />
                <Route
                  exact={true}
                  path="/join-us-form"
                  component={JoinUsForm}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Switch>
        </Router>
      </div>
      <ScrollTop />
      <Footer className="Footer" />
    </Fragment>
  );
};

export default App;
