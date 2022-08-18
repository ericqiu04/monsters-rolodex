import React from 'react';
import Monsters from './monsters-test';

function InputBox() {
    <input className = "search-box" type = 'search' placeholder = 'search song' onChange = {() => {
        Monsters.state();
}