import React from "react";
import styles from "./Button.module.css";

interface CloseButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  size = 30,
}) => {
  return (
    <button
      style={{ width: size, height: size, fontSize: size / 2 }}
      className={styles.clear_button}
      onClick={onClick}
    >
      ✕
    </button>
  );
};
