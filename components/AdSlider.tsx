"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const banners = [
  {
    badge: "MUKESH MANPOWER",
    title: "Reliable Workforce.",
    highlight: "Powerful Business.",
    description:
      "Trusted manpower solutions for companies, industries and growing businesses.",
    button: "Hire Workforce",
    href: "/companies",
  },
  {
    badge: "JOB OPPORTUNITIES",
    title: "Your Next Job",
    highlight: "Starts Here.",
    description:
      "Register your profile with MUKESH MANPOWER and explore workforce opportunities.",
    button: "Apply Now",
    href: "/apply",
  },
  {
    badge: "VERIFIED WORKFORCE",
    title: "Skilled People.",
    highlight: "Ready to Work.",
    description:
      "Connect businesses with reliable and deployment-ready manpower.",
    button: "View Workers",
    href: "/workers",
  },
];

export default function AdSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const banner = banners[active];

  const previous = () => {
    setActive((current) => (current - 1 + banners.length) % banners.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % banners.length);
  };

  return (
    <section
      aria-label="MUKESH MANPOWER promotional slider"
      style={{
        padding: "18px 0",
        background: "var(--mm-surface)",
      }}
    >
      <div className="mm-container">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            minHeight: 360,
            borderRadius: 28,
            background:
              "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))",
            boxShadow: "0 24px 70px rgba(5,15,29,0.20)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: -130,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(220,38,38,0.12)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              minHeight: 360,
              padding: "55px clamp(25px, 6vw, 70px)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ maxWidth: 720 }}>
              <div
                style={{
                  display: "inline-flex",
                  padding: "7px 13px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: 1,
                  marginBottom: 18,
                }}
              >
                {banner.badge}
              </div>

              <h2
                key={`title-${active}`}
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: "clamp(34px, 6vw, 64px)",
                  lineHeight: 1.03,
                  letterSpacing: "-2px",
                }}
              >
                {banner.title}
                <br />
                <span style={{ color: "var(--mm-red-400)" }}>
                  {banner.highlight}
                </span>
              </h2>

              <p
                style={{
                  maxWidth: 620,
                  margin: "18px 0 25px",
                  color: "#d1deeb",
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                {banner.description}
              </p>

              <Link
                href={banner.href}
                className="mm-button mm-button-primary"
              >
                {banner.button} →
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous banner"
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 4,
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.20)",
              color: "#fff",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next banner"
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 4,
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.20)",
              color: "#fff",
              cursor: "pointer",
              fontSize: 20,
            }}
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 7,
              zIndex: 5,
            }}
          >
            {banners.map((item, index) => (
              <button
                key={item.badge}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show banner ${index + 1}`}
                style={{
                  width: active === index ? 28 : 8,
                  height: 8,
                  padding: 0,
                  border: 0,
                  borderRadius: 999,
                  background:
                    active === index
                      ? "var(--mm-red-400)"
                      : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  transition: "width 180ms ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
              }
