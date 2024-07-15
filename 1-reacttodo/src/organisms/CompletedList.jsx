import React from "react";
import ToDoItem from "../molecules/ToDoItem";
import "../styles/ToDoList.css";

export default function CompletedList({ items, onDelete, onToggle }) {
  return (
    <div>
      내일 할 일
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
  );
}
