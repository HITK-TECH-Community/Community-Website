import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SimpleToast } from "../src/components/util/Toast/index";
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
import { ForgotPasswordRecovery } from "./pages/ForgotPasswordRecovery/index";

import { useSelector } from "react-redux";

const App = () => {
  const isSuperAdmin = useSelector((state) => state.isSuperAdmin);

  function getTheme() {
    return JSON.parse(localStorage.getItem("dark")) || false;
  }
  const [theme, setTheme] = useState(getTheme());
  const [toast, setToast] = useState(false);

  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 3000);

    localStorage.setItem("dark", !theme);
  }

  useEffect(() => {
    console.log("Theme changed");
  }, [theme, toast]);

  return (
    <Fragment>
      <div className="Container">
        <SimpleToast open={toast} message={"You have changed the theme"} />
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
              <Navbar handleClick={toggleTheme} theme={theme} />
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
                  render={() => <ForgotPassword theme={theme} />}
                />
                <Route
                  exact={true}
                  path="/forgot-password/:id"
                  component={ForgotPasswordRecovery}
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
          <Footer className="Footer" theme={theme} />
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
