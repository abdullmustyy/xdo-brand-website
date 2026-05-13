type Props = { n: string; color?: string };

export default function Serial({ n, color = "var(--violet-700)" }: Props) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 500,
        color,
        letterSpacing: "0.12em",
      }}
    >
      {n}
    </span>
  );
}
