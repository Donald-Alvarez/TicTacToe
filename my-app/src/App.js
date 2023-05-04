import { useState } from 'react';
import './App.css';


function Square({}){
  const [value, setValue] = useState(null);
  function handleClick() {
    console.log('clicked!');
  }
  return  (
    <button
      className="square"
      onClick={handleClick}
    >1</button>
  );  
}
export default function Board() { 
  return(
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  ) 
}