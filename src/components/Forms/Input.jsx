// src/components/FormComponents/Input.jsx
import React from "react";

export default function Input({
  id,
  name,
  type = "text",
  label,
  required = false,
  value,
  onChange,
  placeholder,
  className = ""
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}