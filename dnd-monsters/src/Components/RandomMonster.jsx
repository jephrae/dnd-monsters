import React, { useState, useEffect } from "react";
import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.development";
import { Link } from "react-router-dom";

const url = "https://www.dnd5eapi.co/api/monsters";

export default function RandomMonster() {
  const [randomMonster, setRandomMonster] = useState([]);

  const getRandom = async () => {
    const response = await fetch(url);
    const randomMonster = await response.json();
    setRandomMonster(randomMonster);
    console.log(randomMonster);
  };
  useEffect(() => {
    getRandom();
  }, []);
  if (randomMonster.length < 1) {
    return <p>loading...</p>;
  }

  const monsterArray = randomMonster.results;
  console.log(monsterArray);
  let randomPick = monsterArray[Math.ceil(Math.random() * monsterArray.length)];
  console.log(randomPick);

  return (
    <div className="random">
      <div className="random-monster-name">
        <Link to={`/MonsterDetails/${randomPick.index}`} key={randomPick.index}>
          <h1>{randomPick.name}</h1>
        </Link>
      </div>
    </div>
  );
}
