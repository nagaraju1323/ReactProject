import React from "react";
import Link from "next/link";

export const Button = ({ children, href, className, size = "md", variant = "primary", icon, target = "_blank", rel = "noopener noreferrer", ...props }) => {
  // Define base styles
  const baseStyles = "inline-flex items-center gap-2 font-bold rounded transition-all duration-200";
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    ghost: "bg-transparent text-primary hover:bg-primary/10",
  };

  return (
    <Link href={href} target={target} rel={rel} className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </Link>
  );
};
