import { useState } from "react";

export default function Player({ initialName, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((prev) => !prev);

  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = isEditing ? <input type="text" required  value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>;

  return (
    <li className={isActive ? "highlight-player" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}