import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "filled" | "unstyled";
  clearButton?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  variant,
  clearButton = false,
  isDisabled = false,
  isError = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  const inputClassName = [
    styles.input,
    variant === "filled" ? styles.filled_input : "",
    variant === "unstyled" ? styles.unstyled_input : "",
    isError ? styles.error_input : "",
    isDisabled ? styles.disabled_input : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.input_container}>
      <input
        className={inputClassName}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "텍스트를 입력해주세요."}
        disabled={isDisabled}
      />
      {clearButton && !isDisabled && value && (
        <button className={styles.clear_button} onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
};
