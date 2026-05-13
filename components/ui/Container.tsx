import type { CSSProperties, ReactNode } from "react";

const widths = { sm: 640, md: 896, lg: 1152, xl: 1280 } as const;

type Props = {
  size?: keyof typeof widths;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export default function Container({ size = "lg", children, style, className }: Props) {
  return (
    <div
      className={className}
      style={{
        maxWidth: widths[size],
        margin: "0 auto",
        padding: "0 32px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
