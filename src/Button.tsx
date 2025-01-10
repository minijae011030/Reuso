import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        background: "#f0f0f0",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
