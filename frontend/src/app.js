import { Fragment, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  let pathname = useLocation();
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      
       <div className="Container">
        <SimpleToast open={toast} message={"You have changed the theme"} />

       <Routes>
          {isSuperAdmin ? (
            <Route
              exact={true}
              path="/admin"
              element={ <LoggedIn theme={theme} />}
              />
              ) : null}

          {isSuperAdmin ? (
              <Route
              exact={true}
              path="/dashboard"
              element={<Admin theme={theme} />}
              />
              ) : null}

        </Routes>
          <div>
            <Navbar handleClick={toggleTheme} theme={theme} />
            
            <Routes>
              <Route
                exact={true}
                path="/"
                element={ <Home theme={theme} />}
              />
              <Route
                exact={true}
                path="/about-us"
                element={<About theme={theme} />}
              />
              <Route
                exact={true}
                path="/Broadcasts"
                element={<Broadcast theme={theme} />}
              />
              <Route
                exact={true}
                path="/all-broadcasts"
                element={ <AllBroadcasts theme={theme} />}
              />
              <Route
                exact={true}
                path="/resources"
                element={ <Resources theme={theme} />}
              />
              <Route
                exact={true}
                path="/contact-us"
                element={ <ContactUs theme={theme} />}
              />
              <Route
                exact={true}
                path="/faqs"
                element={ <Faq theme={theme} />}
              />
              <Route
                exact={true}
                path="/admin"
                element={<Login theme={theme} />}
              />
              <Route
                exact={true}
                path="/forgot-password"
                element={ <ForgotPassword theme={theme} />}
              />
              <Route
                exact={true}
                path="/forgot-password/:id"
                element={ForgotPasswordRecovery}
              />
              <Route
                exact={true}
                path="/setting"
                element={ <Setting theme={theme} />}
              />
              <Route
                exact={true}
                path="/terms"
                element={ <Terms theme={theme} />}
              />
              <Route
                exact={true}
                path="/get-involved"
                element={ <GetInvolved theme={theme} />}
              />
              <Route
                exact={true}
                path="/privacy-policy"
                element={<PrivacyPolicy theme={theme} />}
              />
              <Route
                exact={true}
                path="/join-us-form"
                element={ <JoinUsForm theme={theme} />}
              />
              <Route element={ <NotFound theme={theme} />} />
            </Routes>
           
          </div>

        <ScrollTop theme={theme} />
        <Footer className="Footer" theme={theme} />
      </div>
      
    </Fragment>
  );
};

export default App;
