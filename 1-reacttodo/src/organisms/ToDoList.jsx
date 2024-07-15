import React from "react";
import ToDoItem from "../molecules/ToDoItem";
import "../styles/ToDoList.css";

export default function ToDoList({ items, onUpdate, onDelete, onToggle }) {
  return (
    <div>
      오늘 할일
      {items
        .filter((item) => !item.completed)
        .map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
    </div>
  );
}
