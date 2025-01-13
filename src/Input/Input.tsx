import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  id?: string;
  name?: string;
  autocomplete?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "filled" | "unstyled";
  clearButton?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  width?: number;
  height?: number;
}

export const Input: React.FC<InputProps> = ({
  id,
  name,
  autocomplete,
  value,
  onChange,
  placeholder,
  variant,
  clearButton = false,
  isDisabled = false,
  isError = false,
  width = 300,
  height = 40,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange("");
    }
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
    <div style={{ width: width }} className={styles.input_container}>
      <input
        style={{ height: height }}
        id={id}
        name={name}
        autoComplete={autocomplete}
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
