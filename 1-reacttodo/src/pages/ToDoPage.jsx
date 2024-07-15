import React, { useState } from "react";
import ToDoTemplate from "../templates/ToDoTemplate";
import TodoItem from "../molecules/ToDoItem";

export default function ToDoPage() {
  const [newToDo, setNewToDo] = useState("");
  const [toDoitems, setToDoItems] = useState([]);

  const addToDo = () => {
    setToDoItems([
      ...toDoitems,
      { id: Date.now(), text: newToDo, completed: false },
    ]);
  };

  const updateToDo = (id, text) => {
    setToDoItems(
      toDoitems.map((item) => (item.id === id ? { ...item, text } : item))
    );
  };

  const deleteToDo = (id) => {
    setToDoItems(toDoitems.filter((item) => item.id !== id));
  };

  const toggleToDo = (id) => {
    setToDoItems(
      toDoitems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <ToDoTemplate
      newToDo={newToDo}
      setNewToDo={setNewToDo}
      addToDo={addToDo}
      toDoItems={toDoitems}
      onUpdate={updateToDo}
      onDelete={deleteToDo}
      onToggle={toggleToDo}
    />
  );
}
