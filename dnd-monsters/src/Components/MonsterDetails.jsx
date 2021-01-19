import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

export default function MonsterDetails(props) {
  const [monster, setMonster] = useState(null);

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => setMonster(res))
      .catch(console.error);
  }, [props.match.params.id]);

  if (!monster) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="monster-container">
      <div className="monster-name">
        <h2> {monster.name}</h2>
      </div>

      <div className="armorclass">
        {" "}
        <GiIcons.GiChestArmor />
        {monster.armor_class}
      </div>
      <div className="hitpoints">
        <FaIcons.FaRegHeart />
        {monster.hit_points}
      </div>
      <div className="hitdice">
        <GiIcons.GiDiceTwentyFacesTwenty />
        {monster.hit_dice}
      </div>
      <div className="speed">
        <GiIcons.GiRun />
        {monster.speed.walk}
      </div>
      <div className="attributes">
        STR: {monster.strength}
        DEX: {monster.dexterity}
        CONST: {monster.constitution}
        INT: {monster.intelligence}
        WIS: {monster.wisdom}
        CHR: {monster.charisma}
      </div>
    </div>
  );
}
