"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Dot from "@/components/ui/Dot";
import Reveal from "@/components/ui/Reveal";
import VioletButton from "@/components/ui/VioletButton";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const onJoin = () => {
    if (!email) return;
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      setEmail("");
    }, 2400);
  };

  return (
    <Reveal
      as="section"
      style={{ background: "var(--cream-100)", padding: "144px 0 160px" }}
    >
      <Container size="xl">
        <div
          style={{
            background: "var(--cream-50)",
            border: "1px solid var(--cream-300)",
            borderRadius: "var(--radius-xl)",
            padding: "80px 56px",
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 22,
              left: 28,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-400)",
              letterSpacing: "0.14em",
            }}
          >
            NEWSLETTER · WEEKLY
          </div>
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 22,
              right: 28,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-400)",
              letterSpacing: "0.14em",
            }}
          >
            EST. 2022
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2rem, 3.6vw, 2.875rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.018em",
              color: "var(--ink-900)",
              margin: "0 auto",
              maxWidth: 560,
              textWrap: "balance",
            }}
          >
            The weekly notes{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--violet-700)",
              }}
            >
              I wish I&apos;d had
            </span>{" "}
            at every stage.
          </h2>
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--ink-700)",
              lineHeight: 1.6,
              maxWidth: 480,
              margin: "24px auto 36px",
            }}
          >
            One short read on growth, sales, or career navigation — pulled from the
            work I&apos;m doing this week. No fluff.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onJoin();
            }}
            className="newsletter-form"
            style={{
              display: "flex",
              gap: 12,
              maxWidth: 480,
              margin: "0 auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@something.com"
              style={{
                flex: "1 1 240px",
                minWidth: 0,
                padding: "13px 16px",
                fontSize: 16,
                fontFamily: "inherit",
                background: "white",
                border: "1px solid var(--ink-300)",
                borderRadius: "var(--radius-sm)",
                color: "var(--ink-900)",
                outline: "none",
              }}
            />
            <VioletButton shimmer onClick={onJoin}>
              {joined ? "✓ You're in" : "Join free"}
            </VioletButton>
          </form>

          <div
            style={{
              marginTop: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 13,
              color: "var(--ink-500)",
            }}
          >
            <Dot size={7} color="var(--success)" /> No spam. Unsubscribe whenever.
          </div>

          <div
            style={{
              marginTop: 32,
              paddingTop: 24,
              borderTop: "1px solid var(--cream-300)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-500)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              flexWrap: "wrap",
            }}
          >
            <span>2,400+ subscribers</span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 999,
                background: "var(--ink-300)",
              }}
            />
            <span>Friday mornings</span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 999,
                background: "var(--ink-300)",
              }}
            />
            <span>~5 min reads</span>
          </div>
        </div>
      </Container>
    </Reveal>
  );
}
