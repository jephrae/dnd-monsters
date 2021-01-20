import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://www.dnd5eapi.co/api/monsters";

export default function RandomMonster() {
  const [randomMonster, setRandomMonster] = useState([]);

  const getRandom = async () => {
    const response = await fetch(url);
    const randomMonster = await response.json();
    setRandomMonster(randomMonster);
  };
  useEffect(() => {
    getRandom();
  }, []);
  if (randomMonster.length < 1) {
    return <p>loading...</p>;
  }

  const monsterArray = randomMonster.results;

  let randomPick = monsterArray[Math.ceil(Math.random() * monsterArray.length)];

  return (
    <div className="random">
      <div className="random-monster-name">
        <Link
          to={`/MonsterDetails/${randomPick.index}`}
          key={randomPick.index}
          style={{ color: "#a34c50", textDecoration: "none" }}
        >
          <h1>{randomPick.name}</h1>
          <p> click to read more about the {randomPick.name}</p>
        </Link>
      </div>
    </div>
  );
}
