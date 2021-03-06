import React, { useLayoutEffect, useState, } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavbarComponent/Navbar";
import Home from "./Pages/Home";
import EventCalendar from "./Pages/EventCalendar";
import GetStarted from "./Pages/GetStarted";
import Participant from "./Pages/Participants";
import HiringManager from "./Pages/HiringManager";
import AboutUs from "./Pages/AboutUs";
import logo from './assets/logos/logo.png'
import Footer from "./components/FooterComponent/Footer";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  if (width < 960){
    return(
      <div classname="App">
        <div style = {{height:'800px', width:'100%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
          <div className ='app-logo'><img src={logo} className = 'app-logo-item' alt = '???'/>
            <div className = 'app-logo-name-center'>
              <h1 className='app-logo-name'>Disclosed</h1>
            </div>
          </div>
          <div style = {{color:'#000000', fontFamily:'sans-serif', fontWeight:'bold', fontSize:'24px', padding:'12px'}}>
            Mobile view in construction...
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/eventcalendar">
              <EventCalendar />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path='/getstarted'>
              <GetStarted />
            </Route>
            <Route path='/participant'>
              <Participant />
            </Route>
            <Route path='/hiringmanager'>
              <HiringManager />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
