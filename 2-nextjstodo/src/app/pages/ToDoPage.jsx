import React, { useState } from "react";
import ToDoTemplate from "../components/templates/ToDoTemplate";

export default function ToDoPage() {
  const [newToDo, setNewToDo] = useState("");
  const [toDoitems, setToDoItems] = useState([]);

  const addToDo = () => {
    if (newToDo.trim()) {
      setToDoItems([
        ...toDoitems,
        { id: Date.now(), text: newToDo, completed: false },
      ]);
      setNewToDo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addToDo();
    }
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
      handleKeyPress={handleKeyPress}
      toDoItems={toDoitems}
      onUpdate={updateToDo}
      onDelete={deleteToDo}
      onToggle={toggleToDo}
    />
  );
}
