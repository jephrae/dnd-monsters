import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Monsters(props) {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const url = "https://www.dnd5eapi.co/api/monsters";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log("good");
        setMonsters(json);
      })
      .catch(console.error);
  }, []);

  if (!monsters) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="container">
      {/* {monsters.map((monsters) => {
        return (
          <div classname="monsters">
            <Link to={`/MonsterDetails/${monsters.name}`} key={monsters.name}>
              <div className="monster-name">{monsters.name}</div>
            </Link>
            <p>{monsters.name}</p>
          </div>
        );
      })} */}
      <p>monster {monsters.name} test</p>
    </section>
  );
}
