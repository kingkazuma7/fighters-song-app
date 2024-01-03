import React, { useState, useEffect } from 'react';
import fightersData from './json/fighters.json';

function FightersList() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    setFighters(fightersData.fighters);
  }, []);

  return (
    <div>
      {fighters.map(fighter => (
        <div key={fighter.id}>
          <h2>{fighter.name}</h2>
          <p>階級: {fighter.weight_class}</p>
          <p>入場曲: {fighter.entrance_song}</p>
          <p>所属団体: {fighter.organization}</p>
        </div>
      ))}
    </div>
  );
}

export default FightersList;
