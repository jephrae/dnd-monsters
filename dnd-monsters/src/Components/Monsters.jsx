import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://www.dnd5eapi.co/api/monsters";

export default function Monsters() {
  const [monsters, setMonsters] = useState([]);

  const getMonsters = async () => {
    const response = await fetch(url);
    const monsters = await response.json();
    setMonsters(monsters);
    console.log(monsters);
    console.log(monsters.results);
  };

  useEffect(() => {
    getMonsters();
  }, []);

  const monsterData = monsters.results;
  // console.log(Object.keys(monsters.results));
  if (monsters.length < 1) {
    return <h3>loading...</h3>;
  }
  return (
    <>
      <h3>monsters</h3>
      <ul className="monster-list">
        {monsterData.map((monsters, index) => {
          // const { name, index } = monster;
          // console.log(monsters.results);
          return (
            <Link to={`/MonsterDetials/${monsters.index}`}>
              <li key={index}>{monsters.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

// export default function Monsters() {
//   const [monsters, setMonsters] = useState([]);

//   useEffect(() => {
//     const url = "https://www.dnd5eapi.co/api/monsters";

//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         setMonsters([json]);
//         console.log(monsters);
//       })
//       .catch(console.error);
//   }, []);

//   console.log(monsters);
//   if (!monsters) {
//     return <h2>loading...</h2>;
//   }

//   return (
//     <div className="monster-container">
//       {monsters.map((monster) => {
//         console.log({ monsters });
//         console.log({ monster });
//         console.log(monsters);
//         console.log(monster);
//         console.log(monster.results);
//         console.log(monster.results.name);

//         return (
//           <div className="monsters-list" key={monsters.index}>
//             <ul> monster test </ul>
//             <li key={monsters.index}> test {monster.name}</li>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
