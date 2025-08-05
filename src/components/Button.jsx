import React from "react";

const Button = ({
  variant = "primary",
  href,
  icon,
  className = "",
  children,
  ...props
}) => {
  // Shared button mechanics
  const baseClasses =
    "button h4 shadow-accent/30";

  // Variant-specific styling
  const variantClasses = {
    primary: `${baseClasses} bg-primary-b-g-gradient text-white shadow-lg hover:shadow-xl`,
    secondary: `${baseClasses} border-2 border-green-600 text-green-700 hover:bg-green-50`,
    tertiary: `${baseClasses} border-2 border-white text-white hover:bg-white hover:text-blue-500`,
  };

  // Combine variant classes with any additional classes
  const allClasses = `${variantClasses[variant] || ""} ${className}`.trim();

  // Render as link if href provided
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  // Default to button
  return (
    <button className={allClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
