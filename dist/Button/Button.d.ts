import React, { ReactNode } from "react";
interface ButtonProps {
    width?: number;
    height?: number;
    color?: string;
    children?: ReactNode;
    variant?: "default" | "light" | "filled" | "transparent" | "outline";
    onClick?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
export {};
