import React from "react";
import "../styles/Input.css";

export default function Input({ value, onChange, onKeyPress }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
