import React from 'react';
import Char from './Char';
import './StarWars.css';

export default function StarwarsChars(props) {
  return (
    <div className="chars-wrapper">
      {props.chars.map(char => <Char char={char} key={char.name}/>)};
    </div>
  )
}
