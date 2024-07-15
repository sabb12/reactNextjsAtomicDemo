import React from "react";
import "../styles/Button.css";

export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
