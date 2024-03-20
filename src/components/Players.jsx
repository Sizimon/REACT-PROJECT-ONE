import { useState } from "react";

export default function Player({ name, symbol }) {
 const [ isEditing, setIsEditing ] = useState(false);

 function handleClickEdit() {
        setIsEditing(!isEditing);    
 }
    return (
        <li>
            <span className="player">
            {isEditing ? (<input></input>) : <span className="player-name">{name}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClickEdit}>Edit</button>
          </li>
    );
}