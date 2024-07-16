import React from "react";

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
