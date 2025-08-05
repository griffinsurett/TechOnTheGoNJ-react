// src/components/FormComponents/Textarea.jsx
export function Textarea({
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  placeholder,
  rows = 4,
  className = ""
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
        placeholder={placeholder}
      />
    </div>
  );
}