"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/Icons";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Rule from "@/components/ui/Rule";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Serial from "@/components/ui/Serial";
import { NOT_FOUND_SUGGESTIONS } from "@/lib/content";

export default function NotFound() {
  return (
    <div style={{ background: "var(--cream-100)", minHeight: "100vh" }}>
      <section style={{ paddingTop: 160, paddingBottom: 96 }}>
        <Container size="xl">
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
              marginBottom: 40,
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "var(--violet-700)" }}>● 05 / SYSTEM</span>
            <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
            <span>Error · 404</span>
            <span style={{ width: 28, height: 1, background: "var(--ink-300)" }} />
            <span>Page not found</span>
          </div>

          <div
            className="notfound-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 96,
              alignItems: "center",
            }}
          >
            <div className="rise d1">
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "clamp(3rem, 8vw, 7rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  color: "var(--ink-900)",
                  margin: 0,
                  textWrap: "balance",
                }}
              >
                Lost the{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--violet-700)",
                  }}
                >
                  thread
                </span>
                .
              </h1>
              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--ink-700)",
                  lineHeight: 1.6,
                  margin: "32px 0 40px",
                  maxWidth: 480,
                }}
              >
                The page you&apos;re looking for doesn&apos;t exist — at least, not
                anymore. Could be a typo, a stale link, or something I retired. Either
                way, here&apos;s a path back.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <PrimaryButton href="/">Take me home</PrimaryButton>
                <SecondaryButton href="/resources">Browse resources</SecondaryButton>
              </div>
            </div>

            <div
              className="drift"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 360,
              }}
            >
              <div
                aria-hidden
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "min(40vw, 420px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.05em",
                  color: "var(--cream-200)",
                  position: "relative",
                }}
              >
                404
                <span
                  style={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    bottom: "16%",
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: "var(--violet-500)",
                    boxShadow: "var(--shadow-portrait)",
                  }}
                />
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 880px) {
              .notfound-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </Container>
      </section>

      <section style={{ background: "var(--cream-200)", padding: "96px 0 128px" }}>
        <Container size="xl">
          <Rule label="WHERE TO NEXT" style={{ marginBottom: 40 }} />
          <div
            className="notfound-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
            }}
          >
            {NOT_FOUND_SUGGESTIONS.map((s) => (
              <SuggestionCard key={s.href} {...s} />
            ))}
          </div>
          <style>{`
            @media (max-width: 1024px) {
              .notfound-cards { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 560px) {
              .notfound-cards { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </Container>
      </section>
    </div>
  );
}

function SuggestionCard({
  href,
  n,
  label,
  body,
}: {
  href: string;
  n: string;
  label: string;
  body: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textAlign: "left",
        cursor: "pointer",
        background: "var(--cream-50)",
        border: `1px solid ${hover ? "var(--violet-300)" : "var(--cream-300)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "28px 28px 32px",
        fontFamily: "inherit",
        transition: "all var(--duration-base)",
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover ? "var(--shadow-hover)" : "none",
        position: "relative",
        textDecoration: "none",
        display: "block",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          color: "var(--violet-700)",
          opacity: hover ? 1 : 0.35,
          transform: hover ? "translate(2px,-2px)" : "none",
          transition: "all var(--duration-fast)",
        }}
      >
        <ArrowUpRight size={18} />
      </div>
      <Serial n={n} />
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: 26,
          letterSpacing: "-0.018em",
          color: hover ? "var(--violet-700)" : "var(--ink-900)",
          margin: "16px 0 10px",
          transition: "color var(--duration-fast)",
        }}
      >
        {label}
      </h3>
      <p style={{ fontSize: 14.5, color: "var(--ink-700)", lineHeight: 1.5, margin: 0 }}>
        {body}
      </p>
    </Link>
  );
}
