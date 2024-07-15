import React from "react";
import ToDoItem from "../molecules/ToDoItem";
import TodoItem from "../molecules/ToDoItem";

export default function ToDoList({ items, onUpdate, onDelete, onToggle }) {
  return (
    <div>
      {items
        .filter((item) => !item.completed)
        .map((item) => (
          <TodoItem
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
