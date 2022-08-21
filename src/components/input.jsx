import React from 'react';
import Monsters from './monsters-test';

function InputBox() {
    return(<input className = "search-box" type = 'search' placeholder = 'search song' onChange = {() => {
        Monsters.state();
}></input>)
    }