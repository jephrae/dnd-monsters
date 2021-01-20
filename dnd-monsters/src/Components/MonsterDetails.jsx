import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import "../App.css";

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
        <div className="size-type">
          {monster.size} {monster.type}
          <br />
        </div>
      </div>
      <div className="monster-stat-att">
        <div className="monsterstats">
          <div className="armorclass">
            AC:
            {monster.armor_class}
            <GiIcons.GiChestArmor />
          </div>
          <div className="hitpoints">
            HP:
            {monster.hit_points}
            <FaIcons.FaRegHeart />
          </div>
          <div className="hitdice">
            Hit Dice: {monster.hit_dice}
            <GiIcons.GiDiceTwentyFacesTwenty />
          </div>
          <div className="walkspeed">
            Walk Speed:
            {monster.speed.walk}
            <GiIcons.GiRun /> <br />
          </div>
        </div>
        <div className="monster-attributes">
          <div className="str">
            STR: {monster.strength} <GiIcons.GiStrongMan />
          </div>
          <div className="dex">
            DEX: {monster.dexterity} <GiIcons.GiFencer />
          </div>
          <div className="const">
            CONST: {monster.constitution}
            <GiIcons.GiHealthPotion />
          </div>
          <div className="int">
            INT: {monster.intelligence}
            <GiIcons.GiBrain />
          </div>
          <div className="wis">
            WIS: {monster.wisdom}
            <GiIcons.GiLightBulb />
          </div>
          <div className="chr">
            CHR: {monster.charisma}
            <GiIcons.GiSuspicious />
          </div>
        </div>
      </div>
    </div>
  );
}
