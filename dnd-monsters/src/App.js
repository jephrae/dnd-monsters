import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import { Switch } from "react-router-dom";
import Monsters from "./Components/Monsters";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import MonsterSearch from "./Components/MonsterSearch";
import RandomMonster from "./Components/RandomMonster";
import MonsterDetails from "./Components/MonsterDetails";

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
        <Route path="/Home" exact component={Home} />

        <Route path="/Monsters" exact component={Monsters} />
        <Route path="/MonsterSearch" exact component={MonsterSearch} />
        <Route path="/RandomMonster" exact component={RandomMonster} />
        <Route path="/MonsterDetails/:id" exact componsnet={MonsterDetails} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
