import './app.css';
import Footer from  './components/header_and_footer/Aaryan/footer';

import Header from './components/header_and_footer/Aaryan/header'
import {BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
