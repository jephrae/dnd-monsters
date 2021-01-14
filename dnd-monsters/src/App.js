import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Switch } from "react-router-dom";
import Monsters from "./Components/Monsters";
import { Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Switch>
        <Sidebar />
      </Switch>
      <div className="Home">
        <Home />

        {/* <Route path="/Monsters" exact component={Monsters} /> */}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
