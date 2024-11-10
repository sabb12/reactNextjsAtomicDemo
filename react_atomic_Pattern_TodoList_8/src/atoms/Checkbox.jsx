import React from "react";
import "../styles/Checkbox.css";

export default function Checkbox({ checked, onChange }) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
