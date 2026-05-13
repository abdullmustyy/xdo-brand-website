import { CURRENTLY_STRIP_ITEMS } from "@/lib/content";

export default function CurrentlyStrip() {
    // Duplicate items so the marquee loops seamlessly
    const items = [
        ...CURRENTLY_STRIP_ITEMS,
        ...CURRENTLY_STRIP_ITEMS,
        ...CURRENTLY_STRIP_ITEMS,
        ...CURRENTLY_STRIP_ITEMS,
        ...CURRENTLY_STRIP_ITEMS,
    ];
    return (
        <section
            style={{
                background: "var(--ink-900)",
                color: "var(--cream-100)",
                overflow: "hidden",
                padding: "18px 0",
            }}
        >
            <div style={{ overflow: "hidden" }}>
                <div
                    className="ticker"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12.5,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--cream-200)",
                        whiteSpace: "nowrap",
                    }}
                >
                    {items.map((t, i) => (
                        <span
                            key={i}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 14,
                                color: t.startsWith("●") ? "var(--violet-300)" : "var(--cream-200)",
                            }}
                        >
                            {t}
                            <span
                                style={{
                                    width: 8,
                                    height: 1,
                                    background: "rgba(220,210,190,0.4)",
                                }}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
