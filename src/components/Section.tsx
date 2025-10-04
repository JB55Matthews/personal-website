import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import "../styles/Section.css";

interface Item {
  id: number;
  name: string;
  description: React.ReactNode;
}

interface SectionProps {
  title: string;
  items: Item[];
}

const Section: React.FC<SectionProps> = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState<Item | null>(null);

  return (
    <div className="section-wrapper">
      <h2 className="section-title">{title}:</h2>
      <div className="section">
        <div className="card-container">
          {items.map((item) => (
            <Card key={item.id} item={item} onClick={() => setActiveItem(item)} />
          ))}
        </div>
      </div>

      {activeItem && (
        <Modal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </div>
  );
};

export default Section;

