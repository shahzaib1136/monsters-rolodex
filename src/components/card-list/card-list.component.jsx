import React from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

export const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
