import React, { useState, useEffect } from "react";

export default function MonsterDetails(props) {
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => setMonster(res))
      .catch(console.error);
    console.log(monster);
  }, [props.match.params.id]);

  if (!monster) {
    return <h3>loading...</h3>;
  }

  return (
    <div>
      <h3> monster deets test</h3>
      {monster.name}
    </div>
  );
}
