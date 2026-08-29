"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const city = String(data.get("city") || "").trim();
    const position = String(data.get("position") || "").trim();

    const message = `MUKESH MANPOWER - Job Application

Name: ${name}
Mobile: ${mobile}
Preferred Location: ${city}
Position: ${position}

मैं MUKESH MANPOWER में नौकरी के लिए आवेदन करना चाहता/चाहती हूँ।`;

    const whatsappUrl = `https://wa.me/916379403821?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid var(--mm-border)",
        }}
      >
        <div
          className="mm-container"
          style={{
            minHeight: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 900,
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                display: "grid",
                placeItems: "center",
                borderRadius: 11,
                background: "var(--mm-blue-900)",
                color: "#fff",
                fontSize: 14,
              }}
            >
              MM
            </span>

            <span style={{ fontSize: 17 }}>
              MUKESH{" "}
              <span style={{ color: "var(--mm-red-500)" }}>MANPOWER</span>
            </span>
          </Link>

          <Link href="/" className="mm-button mm-button-outline">
            ← Home
          </Link>
        </div>
      </header>

      {/* Page Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))",
          color: "#fff",
          padding: "58px 0",
        }}
      >
        <div className="mm-container">
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.16)",
                fontSize: 12,
                fontWeight: 800,
                marginBottom: 18,
              }}
            >
              JOB APPLICATION
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 54px)",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
              }}
            >
              अपने करियर की शुरुआत करें
            </h1>

            <p
              style={{
                margin: "16px auto 0",
                maxWidth: 620,
                color: "#d3dfec",
                lineHeight: 1.7,
              }}
            >
              अपनी सही जानकारी भरें। आपकी application details WhatsApp के
              माध्यम से MUKESH MANPOWER तक भेजी जाएंगी।
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section style={{ padding: "60px 0", background: "var(--mm-surface)" }}>
        <div
          className="mm-container"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.75fr) minmax(0, 1.25fr)",
            gap: 24,
            alignItems: "start",
          }}
        >
          {/* Information Card */}
          <aside
            className="mm-card"
            style={{
              padding: 28,
              background: "var(--mm-blue-900)",
              color: "#fff",
              borderColor: "transparent",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#b8c9dc",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              MUKESH MANPOWER
            </div>

            <h2
              style={{
                margin: "12px 0",
                fontSize: 28,
                lineHeight: 1.2,
              }}
            >
              Apply with confidence.
            </h2>

            <p
              style={{
                color: "#cbd7e5",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              हम job seekers को suitable workforce opportunities से connect
              करने के लिए एक व्यवस्थित application process तैयार कर रहे हैं।
            </p>

            <div
              style={{
                marginTop: 26,
                display: "grid",
                gap: 12,
              }}
            >
              {[
                "सही जानकारी भरें",
                "Preferred location चुनें",
                "अपनी desired position चुनें",
                "Application WhatsApp पर भेजें",
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom:
                      index === 3
                        ? "none"
                        : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      background: "var(--mm-red-500)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    {index + 1}
                  </span>

                  <span style={{ fontSize: 13 }}>{item}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Form Card */}
          <div className="mm-card" style={{ padding: 28 }}>
            <div style={{ marginBottom: 24 }}>
              <h2
                style={{
                  margin: 0,
                  color: "var(--mm-blue-900)",
                  fontSize: 28,
                }}
              >
                Application Details
              </h2>

              <p
                style={{
                  margin: "8px 0 0",
                  color: "var(--mm-muted)",
                  fontSize: 14,
                }}
              >
                सभी जरूरी जानकारी भरना अनिवार्य है।
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gap: 18,
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: 7,
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  पूरा नाम *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mm-input"
                  placeholder="अपना पूरा नाम लिखें"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  style={{
                    display: "block",
                    marginBottom: 7,
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  मोबाइल नंबर *
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="mm-input"
                  placeholder="10 अंकों का मोबाइल नंबर"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  style={{
                    display: "block",
                    marginBottom: 7,
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  Preferred Location *
                </label>

                <select
                  id="city"
                  name="city"
                  className="mm-select"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Location चुनें
                  </option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bengaluru">Bengaluru</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="position"
                  style={{
                    display: "block",
                    marginBottom: 7,
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  Desired Position *
                </label>

                <select
                  id="position"
                  name="position"
                  className="mm-select"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Position चुनें
                  </option>
                  <option value="Machine Operator">Machine Operator</option>
                  <option value="Factory Helper">Factory Helper</option>
                  <option value="Warehouse Loader">Warehouse Loader</option>
                  <option value="Packer">Packer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="mm-button mm-button-primary"
                style={{
                  width: "100%",
                  border: 0,
                  marginTop: 6,
                }}
              >
                💬 WhatsApp पर Application भेजें
              </button>

              {submitted && (
                <div
                  className="mm-badge mm-badge-success"
                  style={{
                    justifyContent: "center",
                    padding: 12,
                  }}
                >
                  Application तैयार है। WhatsApp window खोल दी गई है।
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          padding: "45px 0",
          background: "#fff",
          borderTop: "1px solid var(--mm-border)",
        }}
      >
        <div
          className="mm-container"
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "var(--mm-blue-900)",
              fontSize: 25,
            }}
          >
            किसी सहायता की जरूरत है?
          </h2>

          <p
            style={{
              color: "var(--mm-muted)",
              margin: "8px 0 20px",
            }}
          >
            सीधे MUKESH MANPOWER से संपर्क करें।
          </p>

          <a href="tel:6379403821" className="mm-button mm-button-secondary">
            📞 6379403821
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#050f1d",
          color: "#aebed0",
          padding: "26px 0",
        }}
      >
        <div
          className="mm-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <strong style={{ color: "#fff" }}>MUKESH MANPOWER</strong>

          <span style={{ fontSize: 12 }}>
            Professional Workforce Solutions
          </span>
        </div>
      </footer>
    </main>
  );
            }
