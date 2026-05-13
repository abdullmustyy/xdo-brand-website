import Container from "@/components/ui/Container";
import PullQuote from "@/components/ui/PullQuote";
import Reveal from "@/components/ui/Reveal";
import { STORY_CHAPTERS, type Chapter } from "@/lib/content";
import ThroughLineBlock from "./ThroughLineBlock";

export default function Timeline() {
  return (
    <section style={{ background: "var(--cream-100)", padding: "0 0 96px" }}>
      <Container size="xl">
        <div
          className="timeline-wrap"
          style={{ position: "relative", paddingTop: 32 }}
        >
          {/* Center line — only on wide screens */}
          <div
            aria-hidden
            className="timeline-spine"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--ink-300)",
              transform: "translateX(-50%)",
            }}
          />

          {STORY_CHAPTERS.map((c, i) => (
            <TimelineChapter key={i} {...c} />
          ))}
          <ThroughLineBlock />
        </div>
      </Container>
      <style>{`
        @media (max-width: 880px) {
          .timeline-spine { display: none; }
        }
      `}</style>
    </section>
  );
}

function TimelineChapter({ n, date, side, title, body, quote }: Chapter) {
  const isLeft = side === "left";
  return (
    <Reveal style={{ position: "relative", marginBottom: 112 }}>
      <div
        className="chapter-marker"
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--violet-700)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: "var(--cream-100)",
            padding: "0 10px",
            marginBottom: 12,
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--cream-100)",
            border: "1px solid var(--violet-500)",
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 600,
            color: "var(--violet-700)",
          }}
        >
          {n}
        </div>
      </div>

      <div
        className="chapter-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          marginTop: 96,
        }}
      >
        {isLeft ? (
          <>
            <ChapterText n={n} title={title} body={body} quote={quote} align="right" />
            <ChapterVisual n={n} title={title} align="left" />
          </>
        ) : (
          <>
            <ChapterVisual n={n} title={title} align="right" />
            <ChapterText n={n} title={title} body={body} quote={quote} align="left" />
          </>
        )}
      </div>
      <style>{`
        @media (max-width: 880px) {
          .chapter-marker { position: relative !important; left: 0 !important; transform: none !important; flex-direction: row !important; gap: 12px; margin-bottom: 24px; }
          .chapter-grid { grid-template-columns: 1fr !important; gap: 32px !important; margin-top: 0 !important; }
        }
      `}</style>
    </Reveal>
  );
}

function ChapterText({
  title,
  body,
  quote,
  align,
  n,
}: {
  n: string;
  title: string;
  body: string;
  quote: string | null;
  align: "left" | "right";
}) {
  return (
    <div
      className="chapter-text"
      style={{
        paddingRight: align === "right" ? 56 : 0,
        paddingLeft: align === "left" ? 56 : 0,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--ink-400)",
          letterSpacing: "0.16em",
          marginBottom: 12,
          textAlign: align,
        }}
      >
        CHAPTER {n}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "clamp(1.875rem, 2.6vw, 2.25rem)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          color: "var(--ink-900)",
          margin: "0 0 20px",
          textWrap: "balance",
          textAlign: align,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 16.5,
          color: "var(--ink-700)",
          lineHeight: 1.7,
          margin: 0,
          textAlign: align,
        }}
      >
        {body}
      </p>
      {quote && (
        <div
          style={{
            display: "flex",
            justifyContent: align === "right" ? "flex-end" : "flex-start",
          }}
        >
          <PullQuote align={align}>{quote}</PullQuote>
        </div>
      )}
      <style>{`
        @media (max-width: 880px) {
          .chapter-text { padding: 0 !important; }
          .chapter-text h3, .chapter-text p, .chapter-text > div { text-align: left !important; }
        }
      `}</style>
    </div>
  );
}

function ChapterVisual({
  n,
  title,
  align,
}: {
  n: string;
  title: string;
  align: "left" | "right";
}) {
  return (
    <div
      className="chapter-visual"
      style={{
        paddingLeft: align === "left" ? 56 : 0,
        paddingRight: align === "right" ? 56 : 0,
      }}
    >
      <div
        style={{
          aspectRatio: "4/3",
          background:
            "linear-gradient(135deg, var(--cream-200) 0%, var(--cream-300) 100%)",
          borderRadius: "var(--radius-lg)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: -20,
            top: -40,
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 320,
            lineHeight: 0.85,
            color: "var(--cream-100)",
            opacity: 0.7,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          {n}
        </div>
        <div
          style={{
            position: "relative",
            padding: "20px 24px",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--ink-700)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .chapter-visual { padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}
