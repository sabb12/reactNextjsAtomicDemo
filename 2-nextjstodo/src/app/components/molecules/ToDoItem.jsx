import React, { useState } from "react";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function TodoItem({
  id,
  text,
  completed,
  onUpdate,
  onDelete,
  onToggle,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div>
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      {isEditing ? (
        <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
      ) : (
        <span>{text}</span>
      )}
      <Button onClick={() => onDelete(id)}>Delete</Button>
      {!completed && (
        <Button
          onClick={() => {
            if (isEditing) onUpdate(id, editText);
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      )}
    </div>
  );
}
