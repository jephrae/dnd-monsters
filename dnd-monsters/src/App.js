import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Switch>
        <Sidebar />
      </Switch>

      <p>APP</p>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
