import React from "react";
import styles from "./Input.module.css";

interface DropdownInputProps {
  label?: string;
  description?: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  variant?: "default" | "filled" | "unstyled";
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  label,
  description,
  options,
  selectedValue,
  onChange,
  variant = "default",
}) => {
  if (variant === "filled") {
    return (
      <div className={styles.label_container}>
        <p className={styles.label}>{label}</p>
        <p className={styles.description}>{description}</p>
        <select
          className={styles.filled_dropdown}
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className={styles.label_container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.description}>{description}</p>
      <select
        className={styles.dropdown}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
