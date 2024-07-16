import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import TodoItem from "../molecules/ToDoItem";
import TodoList from "../organisms/TodoList";
import CompletedList from "../organisms/CompletedList";

export default function ToDoTemplate({
  newToDo,
  setNewToDo,
  addToDo,
  handleKeyPress,
  toDoItems,
  onUpdate,
  onDelete,
  onToggle,
}) {
  return (
    <div>
      <div>
        <Input
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button onClick={addToDo}>Add</Button>
      </div>
      <TodoList
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
