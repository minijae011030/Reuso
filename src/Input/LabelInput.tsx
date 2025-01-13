import React from "react";
import styles from "./Input.module.css";

interface LabelInputProps {
  id?: string;
  name?: string;
  autocomplete?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "filled";
  clearButton?: boolean;
  label?: string;
  description?: string;
  isDisabled?: boolean;
  error?: string;
  isError?: boolean;
}
export const LabelInput: React.FC<LabelInputProps> = ({
  id,
  name,
  value,
  autocomplete,
  onChange,
  placeholder,
  variant,
  clearButton,
  label,
  description,
  isDisabled,
  error,
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

    isError ? styles.error_input : "",
    isDisabled ? styles.disabled_input : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.label_container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.input_container}>
        <input
          id={id}
          name={name}
          autoComplete={autocomplete}
          className={inputClassName}
          type="text"
          value={value}
          onChange={handleChange}
          disabled={isDisabled}
          placeholder={placeholder || "텍스트를 입력해주세요."}
        />
        {clearButton && !isDisabled && value && (
          <button className={styles.clear_button} onClick={handleClear}>
            ✕
          </button>
        )}
      </div>
      {isError && <p className={styles.error}>{error}</p>}
    </div>
  );
};
