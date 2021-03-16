import { Fragment, useEffect, useState } from "react";
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
import { ForgotPassword } from "./pages/ForgotPassword/index";
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

  const [theme, setTheme] = useState(false);

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
  }

  useEffect(() => {
    console.log("You have changed the theme");
  }, [theme]);

  return (
    <Fragment>
      <div className="Container">
        <Router>
          <Switch>
            {isSuperAdmin ? (
              <Route
                exact={true}
                path="/admin"
                render={() => <LoggedIn theme={theme} />}
              />
            ) : null}

            {isSuperAdmin ? (
              <Route
                exact={true}
                path="/dashboard"
                render={() => <Admin theme={theme} />}
              />
            ) : null}
            <div>
              <Navbar handleClick={toggleTheme} />
              <Switch>
                <Route
                  exact={true}
                  path="/"
                  render={() => <Home theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/about-us"
                  render={() => <About theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/Broadcasts"
                  render={() => <Broadcast theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/all-broadcasts"
                  render={() => <AllBroadcasts theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/resources"
                  render={() => <Resources theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/contact-us"
                  render={() => <ContactUs theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/faqs"
                  render={() => <Faq theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/admin"
                  render={() => <Login theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route
                  exact={true}
                  path="/setting"
                  render={() => <Setting theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/terms"
                  render={() => <Terms theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/get-involved"
                  render={() => <GetInvolved theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/privacy-policy"
                  render={() => <PrivacyPolicy theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/join-us-form"
                  render={() => <JoinUsForm theme={theme} />}
                />
                <Route render={() => <NotFound theme={theme} />} />
              </Switch>
            </div>
          </Switch>
          <ScrollTop />
          <Footer className="Footer" />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
