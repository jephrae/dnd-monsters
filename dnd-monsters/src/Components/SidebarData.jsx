import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/MonsterSearch',
        icon: <IoIcons.IoIosSearch/>,
        cName: 'nav-text'
    },
    {
        title: 'Random',
        path: '/RandomMonster',
        icon: <FaIcons.FaRandom/>,
        cName: 'nav-text'
    }
]