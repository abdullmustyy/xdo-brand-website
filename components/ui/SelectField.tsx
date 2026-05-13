"use client";

import { useState, type ChangeEvent } from "react";
import { ChevronDown } from "./Icons";

type Props = {
  label: string;
  options: string[];
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
};

export default function SelectField({ label, options, value, onChange, name }: Props) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", position: "relative" }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-700)", marginBottom: 6 }}>
        {label}
      </div>
      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "13px 38px 13px 16px",
          fontSize: 16,
          fontFamily: "inherit",
          background: "var(--cream-50)",
          border: focus ? "1px solid var(--violet-500)" : "1px solid var(--ink-300)",
          borderRadius: "var(--radius-sm)",
          color: "var(--ink-900)",
          outline: "none",
          boxShadow: focus ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
      <div style={{ position: "absolute", right: 14, top: 38, pointerEvents: "none" }}>
        <ChevronDown />
      </div>
    </label>
  );
}
