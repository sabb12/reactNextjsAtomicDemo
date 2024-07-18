import React, { useState, useEffect } from "react";
import ToDoTemplate from "../components/templates/ToDoTemplate";

export default function ToDoPage() {
  const [newToDo, setNewToDo] = useState("");
  const [toDoItems, setToDoItems] = useState(() => {
    // Load initial state from localStorage
    const savedToDos = localStorage.getItem("toDoItems");
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  useEffect(() => {
    // Save to localStorage whenever toDoItems changes
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  const addToDo = () => {
    if (newToDo.trim()) {
      setToDoItems([
        ...toDoItems,
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
      toDoItems.map((item) => (item.id === id ? { ...item, text } : item))
    );
  };

  const deleteToDo = (id) => {
    setToDoItems(toDoItems.filter((item) => item.id !== id));
  };

  const toggleToDo = (id) => {
    setToDoItems(
      toDoItems.map((item) =>
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
      toDoItems={toDoItems}
      onUpdate={updateToDo}
      onDelete={deleteToDo}
      onToggle={toggleToDo}
    />
  );
}
