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
  const monsterSpecial = monster.special_abilities;
  const monsterActions = monster.actions;
  const monsterLegendary = monster.legendary_actions;
  console.log(monster.actions);
  return (
    <div className="monster-container">
      <div className="monster-name">
        <h1> {monster.name}</h1>
        <div className="size-type">
          <h3>
            {monster.size} {monster.type}
          </h3>
          <div className="alignment">{monster.alignment}</div>
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
            <br />
            <br />
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
      <div className="actions">
        <div className="monsterActions">
          <div className="subhed" style={{ color: "#a34c50" }}>
            <h3>Actions:</h3>
          </div>
          {monsterActions.map((monster, index) => {
            return (
              <li key={monster.index} style={{ listStyle: "none" }}>
                <h4> {monster.name}</h4> {monster.desc}
              </li>
            );
          })}
        </div>
      </div>
      <div className="monster-legendary-container">
        <div className="monster-specials">
          <div className="subhed" style={{ color: "#a34c50" }}>
            <h3>Special Abilities:</h3>
          </div>
          {monsterSpecial.map((monster, index) => {
            return (
              <li key={monster.index} style={{ listStyle: "none" }}>
                <h4> {monster.name}</h4> {monster.desc}
              </li>
            );
          })}
        </div>
      </div>
      <div className="monster-legendary-container">
        <div className="monster-legendary">
          <div className="subhed" style={{ color: "#a34c50" }}>
            <h3>Legendary Abilities:</h3>
          </div>
          {monsterLegendary.map((monster, index) => {
            return (
              <li key={monster.index} style={{ listStyle: "none" }}>
                <h4> {monster.name}</h4> {monster.desc}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}
