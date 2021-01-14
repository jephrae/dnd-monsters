import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Monsters",
    path: "/Monsters",
    icon: <GiIcons.GiAxeSword />,
    cName: "nav-text",
  },

  {
    title: "Search",
    path: "/MonsterSearch",
    icon: <IoIcons.IoIosSearch />,
    cName: "nav-text",
  },
  {
    title: "Random",
    path: "/RandomMonster",
    icon: <FaIcons.FaRandom />,
    cName: "nav-text",
  },
];
