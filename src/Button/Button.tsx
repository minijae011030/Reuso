import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import Color from "color";

interface ButtonProps {
  width?: number;
  height?: number;
  color?: string;
  children?: ReactNode;
  variant?: "default" | "light" | "filled" | "transparent" | "outline";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  width = 170,
  height = 50,
  children,
  variant = "default",
  onClick,
}) => {
  if (variant === "transparent") {
    return (
      <button
        className={styles.button_transparent}
        onClick={onClick}
        style={{
          width: width,
          height: height,
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          background: "white",
          color: color,
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
        className={styles.button}
        onClick={onClick}
        style={{
          width: width,
          height: height,
          fontSize: "16px",
          border: `1px solid ${color}`,
          borderRadius: "5px",
          background: lighterColor,
          color: color,
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={styles.button}
        onClick={onClick}
        style={{
          width: width,
          height: height,
          fontSize: "16px",
          border: `1px solid ${color}`,
          borderRadius: "5px",
          background: "white",
          color: color,
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "filled") {
    return (
      <button
        className={styles.button}
        onClick={onClick}
        style={{
          width: width,
          height: height,
          fontSize: "16px",
          border: `2px solid ${color}`,
          borderRadius: "5px",
          background: color,
          color: "#fff",
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{
        width: width,
        height: height,
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
