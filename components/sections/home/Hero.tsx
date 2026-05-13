import Container from "@/components/ui/Container";
import Dot from "@/components/ui/Dot";
import Portrait from "@/components/ui/Portrait";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Rule from "@/components/ui/Rule";
import Serial from "@/components/ui/Serial";
import { HOME_STATS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "94vh",
        background: "var(--cream-100)",
        paddingTop: 132,
        paddingBottom: 64,
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Backdrop monogram */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: -120,
          bottom: -160,
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "min(56vw, 720px)",
          lineHeight: 0.8,
          color: "var(--cream-200)",
          opacity: 0.55,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        XD
      </div>

      <Container size="xl" style={{ position: "relative" }}>
        <div
          className="rise"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "var(--font-mono)",
            fontSize: 11.5,
            color: "var(--ink-500)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          <span style={{ color: "var(--violet-700)" }}>● XDO / 01</span>
          <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
          <span>Lagos · Worldwide</span>
          <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
          <span>Est. 2018</span>
        </div>

        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "58fr 42fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="rise d1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--violet-50)",
                color: "var(--violet-700)",
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              <Dot size={6} color="var(--violet-700)" /> Growth Performance Expert
            </div>

            <h1
              className="rise d2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: "-0.025em",
                color: "var(--ink-900)",
                margin: 0,
                textWrap: "balance",
              }}
            >
              <span style={{ color: "var(--violet-700)" }}>Level up</span>
              <br />
              how you grow,
              <br />
              sell,{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--ink-700)",
                }}
              >
                &amp;
              </span>{" "}
              build
              <br />
              your career.
            </h1>

            <p
              className="rise d3"
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.55,
                maxWidth: 540,
                margin: "36px 0 40px",
              }}
            >
              I help businesses and professionals turn fuzzy strategy into repeatable
              growth — through branding, marketing, sales, and career navigation that
              actually compound.
            </p>

            <div
              className="rise d4"
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <PrimaryButton size="lg" href="/resources">
                Browse free resources
              </PrimaryButton>
              <SecondaryButton href="/story">My story</SecondaryButton>
            </div>
          </div>

          <div className="portrait-rise" style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -8,
                right: -28,
                width: 160,
                height: 1,
                background: "var(--violet-300)",
                transform: "rotate(-22deg)",
                transformOrigin: "right",
                opacity: 0.8,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: -28,
                left: 0,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--violet-700)",
                letterSpacing: "0.16em",
              }}
            >
              FIG · 01
            </div>
            <Portrait aspect="4/5" badge="LIVE — TAKING Q2 INQUIRIES" />
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: -28,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ink-500)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              XD Olayinka · LOS / GMT+1
            </div>
          </div>
        </div>

        <div className="rise d5" style={{ marginTop: 96 }}>
          <Rule label="WHAT I WORK ON" style={{ marginBottom: 28 }} />
          <StatsRow />
        </div>
      </Container>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}

function StatsRow() {
  return (
    <div
      className="stats-row"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        borderTop: "1px solid var(--ink-300)",
      }}
    >
      {HOME_STATS.map((s, i) => (
        <div
          key={i}
          className="stats-cell"
          style={{
            padding: "28px 28px 4px",
            paddingLeft: i === 0 ? 0 : 28,
            borderRight:
              i < HOME_STATS.length - 1 ? "1px solid var(--ink-300)" : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--violet-700)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {s.lbl}
            </div>
            <Serial n={s.n} color="var(--ink-400)" />
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: "-0.015em",
              color: "var(--ink-900)",
              marginBottom: 10,
              textWrap: "balance",
            }}
          >
            {s.val}
          </div>
          <p
            style={{
              fontSize: 14.5,
              color: "var(--ink-500)",
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 320,
            }}
          >
            {s.body}
          </p>
        </div>
      ))}
      <style>{`
        @media (max-width: 760px) {
          .stats-row { grid-template-columns: 1fr !important; }
          .stats-cell { border-right: none !important; border-bottom: 1px solid var(--ink-300); padding-left: 0 !important; padding-right: 0 !important; }
          .stats-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
