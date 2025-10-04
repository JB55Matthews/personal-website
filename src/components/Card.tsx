import React from "react";
import "../styles/Card.css";

interface CardProps {
  item: {
    id: number;
    name: string;
  };
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {item.name}
    </div>
  );
};

export default Card;

