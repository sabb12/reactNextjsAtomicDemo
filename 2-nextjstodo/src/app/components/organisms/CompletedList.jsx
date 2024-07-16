import React from "react";
import TodoItem from "../molecules/TodoItem";

export default function CompletedList({ items, onDelete, onToggle }) {
  return (
    <div>
      내일 할 일
      {items
        .filter((item) => item.completed)
        .map((item) => (
          <TodoItem
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
