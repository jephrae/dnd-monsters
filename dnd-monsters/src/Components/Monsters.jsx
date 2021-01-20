import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const url = "https://www.dnd5eapi.co/api/monsters";

export default function Monsters(props) {
  const [monsters, setMonsters] = useState([]);

  const getMonsters = async () => {
    const response = await fetch(url);
    const monsters = await response.json();
    setMonsters(monsters);
  };

  useEffect(() => {
    getMonsters();
  }, []);

  const monsterData = monsters.results;

  if (monsters.length < 1) {
    return <h3>loading...</h3>;
  }
  return (
    <>
      <div className="monsterlistname">
        <h1>Ye Olde List of Monsters</h1>
        <p>click the mosnter name to learn more</p>
      </div>
      <br />
      <ul className="monster-list">
        {monsterData.map((monsters, index) => {
          return (
            <Link
              to={`/MonsterDetails/${monsters.index}`}
              key={monsters.index}
              style={{ color: "#e94445", textDecoration: "none" }}
            >
              <li key={monsters.index}>{monsters.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
