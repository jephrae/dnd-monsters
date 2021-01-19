import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Monsters from "./Components/Monsters";
import Home from "./Components/Home";
import MonsterSearch from "./Components/MonsterSearch";
import RandomMonster from "./Components/RandomMonster";
import MonsterDetails from "./Components/MonsterDetails";
import "./App.css";

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
        <Route path="/MonsterDetails/:id" component={MonsterDetails} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
