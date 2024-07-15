import React from "react";
import ToDoList from "../organisms/ToDoList";
import CompletedList from "../organisms/CompletedList";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TodoItem from "../molecules/ToDoItem";

export default function ToDoTemplate({
  newToDo,
  setNewToDo,
  addToDo,
  toDoItems,
  onUpdate,
  onDelete,
  onToggle,
}) {
  return (
    <div>
      <div>
        <Input value={newToDo} onChange={(e) => setNewToDo(e.target.value)} />
        <Button onClick={addToDo}>Add</Button>
      </div>
      <ToDoList
        items={toDoItems}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onToggle={onToggle}
      />
      <CompletedList
        items={toDoItems}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
}
