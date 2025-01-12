import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import Color from "color";

interface ButtonProps {
  width?: number;
  height?: number;
  color?: string;
  disabled?: boolean;
  children?: ReactNode;
  variant?: "default" | "light" | "filled" | "transparent" | "outline";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color = "#007bff",
  width = 170,
  height = 50,
  children,
  variant = "default",
  disabled = false,
  onClick,
}) => {
  if (disabled) {
    return (
      <button
        className={styles.button_disabled}
        style={{
          width,
          height,
        }}
        disabled
      >
        {children}
      </button>
    );
  }

  if (variant === "transparent") {
    return (
      <button
        className={`${styles.button} ${styles.button_transparent}`}
        onClick={onClick}
        style={{
          width,
          height,
          color,
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "light") {
    const lighterColor = Color(color)
      .lighten(0.9)
      .hex();

    return (
      <button
        className={`${styles.button}`}
        onClick={onClick}
        style={{
          width,
          height,
          border: `1px solid ${color}`,
          background: lighterColor,
          color,
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    const lighterColor = Color(color)
      .lighten(0.9)
      .hex();

    return (
      <button
        className={`${styles.button} ${styles.button_outline}`}
        onClick={onClick}
        style={
          {
            width,
            height,
            "--button-color": color,
            "--hover-color": lighterColor,
          } as React.CSSProperties
        }
      >
        {children}
      </button>
    );
  }

  if (variant === "filled") {
    return (
      <button
        className={`${styles.button} ${styles.button_filled}`}
        onClick={onClick}
        style={{
          width,
          height,
          background: color,
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${styles.button}`}
      onClick={onClick}
      style={{
        width,
        height,
        fontSize: "16px",
        border: "1px solid rgb(160, 160, 160)",
        borderRadius: "5px",
        background: "white",
        color: "#000",
      }}
    >
      {children}
    </button>
  );
};
