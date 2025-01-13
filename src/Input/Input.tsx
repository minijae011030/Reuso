import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "filled" | "unstyled";
  clearButton?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  variant,
  clearButton = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={styles.input_container}>
      <input
        className={
          variant === "filled"
            ? styles.filled_input
            : variant === "unstyled"
            ? styles.unstyled_input
            : styles.input
        }
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "텍스트를 입력해주세요."}
      />
      {clearButton && value && (
        <button className={styles.clear_button} onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
};
