import './app.css';
import Footer from  './components/header_and_footer/Aaryan/footer';
import Header from './components/header_and_footer/Aaryan/header';
import LoginForm from './components/login_and_signup/Aaryan/login';
import SignupForm from './components/login_and_signup/Aaryan/signup'
import {BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
          <LoginForm />
          <SignupForm />
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
