"use client";

import { useState, type ChangeEvent } from "react";

type Props = {
  label: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};

export default function TextField({
  label,
  required,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>
        {label} {required && <span style={{ color: "var(--violet-500)" }}>*</span>}
      </div>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        required={required}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "13px 16px",
          fontSize: 16,
          fontFamily: "inherit",
          background: "var(--cream-50)",
          border: focus ? "1px solid var(--violet-500)" : "1px solid var(--ink-300)",
          borderRadius: "var(--radius-sm)",
          color: "var(--ink-900)",
          outline: "none",
          boxShadow: focus ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
          transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
        }}
      />
    </label>
  );
}
