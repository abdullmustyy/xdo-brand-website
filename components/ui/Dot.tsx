type Props = { color?: string; size?: number };

export default function Dot({ color = "var(--violet-700)", size = 6 }: Props) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
        flexShrink: 0,
      }}
    />
  );
}
