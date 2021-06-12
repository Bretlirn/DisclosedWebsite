import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Reports from "./Pages/Reports";
import Email from "./components/Email";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/reports">
              <Reports />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Email />
      </div>
    </>
  );
}

export default App;
