import React from "react";
import styles from "./Input.module.css";

interface LabelInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: "default" | "filled" | "unstyled";
  clearButton?: boolean;
  label?: string;
  description?: string;
  error?: string;
  isError?: boolean;
}
export const LabelInput: React.FC<LabelInputProps> = ({
  value,
  onChange,
  placeholder,
  variant,
  clearButton,
  label,
  description,
  error,
  isError = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange("");
  };

  return (
    <div className={styles.label_container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.input_container}>
        <input
          className={styles.input}
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
      {isError && <p className={styles.error}>{error}</p>}
    </div>
  );
};
