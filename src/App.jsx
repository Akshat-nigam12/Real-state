import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Aboutus from "./components/AboutUs/Aboutus";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SighIn from "./components/SighIN/SighIn";




function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <Aboutus />
      <GetStarted />
      <Footer />

      <div>
        <Router>
          <Routes>

            <Route path="/signIn" element={<SighIn /> }/>
            
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
