"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Container from "@/components/ui/Container";
import Dot from "@/components/ui/Dot";
import Eyebrow from "@/components/ui/Eyebrow";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SelectField from "@/components/ui/SelectField";
import TextArea from "@/components/ui/TextArea";
import TextField from "@/components/ui/TextField";

type FormState = {
  name?: string;
  email?: string;
  describes?: string;
  service?: string;
  budget?: string;
  situation?: string;
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);

  const set =
    (k: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="apply-form"
      style={{ background: "var(--cream-100)", padding: "128px 0 160px", scrollMarginTop: 96 }}
    >
      <Container size="xl">
        <div
          className="apply-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div className="apply-left" style={{ position: "sticky", top: 120 }}>
            <Eyebrow>Work with me</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2rem, 3.6vw, 2.875rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--ink-900)",
                margin: "0 0 24px",
                textWrap: "balance",
              }}
            >
              Ready to level up?
              <br />
              Let&apos;s talk.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--ink-700)",
                lineHeight: 1.65,
                margin: "0 0 28px",
                maxWidth: 420,
              }}
            >
              Fill this out and I&apos;ll get back to you personally within 48 hours.
            </p>
            <div
              style={{
                background: "var(--violet-50)",
                borderRadius: "var(--radius-md)",
                padding: "20px 22px",
                maxWidth: 420,
                fontSize: 15,
                color: "var(--ink-900)",
                lineHeight: 1.55,
              }}
            >
              <strong>Serious inquiries only.</strong> I work with a small number of
              clients at a time to ensure depth, not breadth.
            </div>
            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid var(--ink-300)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ink-500)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <span>● 1 slot · Q2 · Growth</span>
              <span>● 2 slots · Q2 · Foundation</span>
            </div>
          </div>

          <div
            className="apply-card"
            style={{
              background: "var(--cream-50)",
              border: "1px solid var(--cream-300)",
              borderRadius: "var(--radius-xl)",
              padding: "56px 56px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--violet-700)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                FORM · 03A
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ink-500)",
                  letterSpacing: "0.12em",
                }}
              >
                5 fields · 2 min
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              <div
                className="apply-row"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
              >
                <TextField
                  label="Name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                />
                <TextField
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@something.com"
                />
              </div>
              <SelectField
                label="What best describes you?"
                value={form.describes}
                onChange={set("describes")}
                options={[
                  "Select one…",
                  "Founder / Operator",
                  "Marketing or Sales Lead",
                  "Career-changer / Job-seeker",
                  "Other",
                ]}
              />
              <SelectField
                label="Service interest"
                value={form.service}
                onChange={set("service")}
                options={[
                  "Select one…",
                  "Foundation — Brand & Positioning Sprint",
                  "Growth — Strategy & Implementation",
                  "Scale — Operator-in-Residence",
                  "Not sure yet",
                ]}
              />
              <SelectField
                label="Budget range"
                value={form.budget}
                onChange={set("budget")}
                options={[
                  "Select one…",
                  "Under $5k",
                  "$5k – $15k",
                  "$15k – $40k",
                  "$40k+",
                ]}
              />
              <TextArea
                label="Tell me about your situation"
                required
                value={form.situation}
                onChange={set("situation")}
                placeholder="What you're working on, where you're stuck, what you've already tried."
              />
              <PrimaryButton full type="submit" onClick={() => onSubmit()}>
                {submitted ? "✓ Application received" : "Submit application"}
              </PrimaryButton>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--ink-500)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  justifyContent: "center",
                }}
              >
                <Dot size={6} color="var(--success)" /> Reviewed personally within 48
                hours.
              </div>
            </form>
          </div>
        </div>
      </Container>
      <style>{`
        @media (max-width: 1000px) {
          .apply-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .apply-left { position: static !important; }
        }
        @media (max-width: 640px) {
          .apply-card { padding: 32px 24px !important; }
          .apply-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
