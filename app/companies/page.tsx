import Link from "next/link";

const sectors = [
  {
    title: "Manufacturing",
    hindi: "मैन्युफैक्चरिंग",
    description:
      "Production, assembly, machine operation और factory support के लिए manpower.",
  },
  {
    title: "Warehouse & Logistics",
    hindi: "वेयरहाउस एवं लॉजिस्टिक्स",
    description:
      "Loading, packing, sorting और material handling के लिए workforce.",
  },
  {
    title: "Automobile",
    hindi: "ऑटोमोबाइल",
    description:
      "Automobile plants और allied operations के लिए skilled एवं semi-skilled manpower.",
  },
  {
    title: "Industrial Operations",
    hindi: "इंडस्ट्रियल ऑपरेशंस",
    description:
      "Industrial facilities की daily workforce requirements के लिए staffing support.",
  },
];

const hubs = ["Delhi NCR", "Tamil Nadu", "Hyderabad", "Bengaluru"];

export default function CompaniesPage() {
  return (
    <main>
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

      <section
        style={{
          background:
            "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))",
          color: "#fff",
          padding: "70px 0",
        }}
      >
        <div
          className="mm-container"
          style={{
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 18,
            }}
          >
            FOR BUSINESS
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Workforce solutions
            <br />
            <span style={{ color: "var(--mm-red-400)" }}>
              built for business.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 700,
              margin: "20px auto 0",
              color: "#d1deeb",
              lineHeight: 1.8,
            }}
          >
            MUKESH MANPOWER कंपनियों को reliable, scalable और professional
            manpower solutions उपलब्ध कराने के लिए तैयार है।
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "65px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div className="mm-container">
          <div style={{ marginBottom: 30 }}>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Our Solutions
            </div>

            <h2
              style={{
                margin: "9px 0 0",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
                letterSpacing: "-1px",
              }}
            >
              Industries we support
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {sectors.map((sector, index) => (
              <article
                key={sector.title}
                className="mm-card mm-card-hover"
                style={{
                  padding: 27,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    display: "inline-grid",
                    placeItems: "center",
                    width: 44,
                    height: 44,
                    borderRadius: 13,
                    background: "var(--mm-blue-900)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 13,
                    marginBottom: 20,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  style={{
                    margin: 0,
                    color: "var(--mm-blue-900)",
                    fontSize: 23,
                  }}
                >
                  {sector.title}
                </h3>

                <div
                  style={{
                    marginTop: 4,
                    color: "var(--mm-red-500)",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {sector.hindi}
                </div>

                <p
                  style={{
                    margin: "13px 0 0",
                    color: "var(--mm-muted)",
                    lineHeight: 1.75,
                    fontSize: 14,
                  }}
                >
                  {sector.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "65px 0",
          background: "#fff",
        }}
      >
        <div className="mm-container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              TARGET HUBS
            </div>

            <h2
              style={{
                margin: "9px 0 0",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              Growing across India
            </h2>

            <p
              style={{
                margin: "12px auto 0",
                maxWidth: 650,
                color: "var(--mm-muted)",
                lineHeight: 1.7,
              }}
            >
              हमारी workforce services के लिए प्रमुख target locations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 14,
            }}
          >
            {hubs.map((hub) => (
              <div
                key={hub}
                className="mm-card"
                style={{
                  padding: "22px 16px",
                  textAlign: "center",
                  fontWeight: 900,
                  color: "var(--mm-blue-900)",
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    marginBottom: 8,
                  }}
                >
                  📍
                </div>

                {hub}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "65px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div
          className="mm-container"
          style={{
            padding: "36px",
            borderRadius: "var(--mm-radius-xl)",
            background:
              "linear-gradient(135deg, var(--mm-blue-900), var(--mm-blue-800))",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(27px, 4vw, 40px)",
            }}
          >
            Need manpower for your company?
          </h2>

          <p
            style={{
              maxWidth: 650,
              margin: "12px auto 25px",
              color: "#cbd8e6",
              lineHeight: 1.7,
            }}
          >
            अपनी manpower requirement बताइए। हमारी team आपकी requirement के
            अनुसार workforce solution तैयार करेगी।
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:6379403821"
              className="mm-button mm-button-primary"
            >
              📞 Contact Us
            </a>

            <a
              href="https://wa.me/916379403821"
              target="_blank"
              rel="noreferrer"
              className="mm-button"
              style={{
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#050f1d",
          color: "#aebed0",
          padding: "28px 0",
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
