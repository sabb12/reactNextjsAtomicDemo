// organisms/CompletedList.jsx
import React from "react";
import "../styles/ToDoList.css";

import ToDoItem from "../molecules/ToDoItem";

export default function CompletedList({ items, onDelete, onToggle }) {
  return (
    <div className="completedContainer">
      완료 한일
      <div className="completedList">
        {items
          .filter((item) => item.completed)
          .map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              completed={item.completed}
              onUpdate={() => {}}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
      </div>
    </div>
  );
}
