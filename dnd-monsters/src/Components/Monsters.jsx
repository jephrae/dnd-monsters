import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Monsters(props) {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const url = "https://www.dnd5eapi.co/api/monsters";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMonsters([json]);
        console.log(json);
      })
      .catch(console.error);
  }, []);

  if (!monsters) {
    return <h2>loading...</h2>;
  }

  console.log(monsters.name);

  return (
    <section className="container">
      {monsters.map((monsters) => {
        return (
          <div className="monsters" key={monsters.index}>
            <p>{monsters.name}</p>
          </div>
        );
      })}

      <p>monster {monsters.index} test</p>
    </section>
  );
}
