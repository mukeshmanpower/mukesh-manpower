import Link from "next/link";

const cardFeatures = [
  {
    title: "Unique Worker ID",
    hindi: "यूनिक पहचान संख्या",
    description:
      "हर approved worker के लिए अलग और traceable MUKESH MANPOWER identification number.",
  },
  {
    title: "Worker Verification",
    hindi: "वर्कर वेरिफिकेशन",
    description:
      "Worker की approved profile और identity information को verification workflow से जोड़ने की foundation.",
  },
  {
    title: "Digital ID Card",
    hindi: "डिजिटल पहचान पत्र",
    description:
      "Approved worker के लिए professional digital ID card तैयार करने की व्यवस्था.",
  },
  {
    title: "Approval Control",
    hindi: "मालिक की मंजूरी",
    description:
      "ID card generation से पहले management approval रखने के लिए सुरक्षित workflow.",
  },
];

export default function IdCardsPage() {
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

      {/* Hero */}
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
            maxWidth: 900,
            textAlign: "center",
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
            DIGITAL IDENTITY
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Professional worker
            <br />
            <span style={{ color: "var(--mm-red-400)" }}>
              identity system.
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
            Approved workers के लिए unique ID, verification और digital card
            management की foundation.
          </p>
        </div>
      </section>

      {/* ID Preview */}
      <section
        style={{
          padding: "70px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div
          className="mm-container"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)",
            gap: 35,
            alignItems: "center",
          }}
        >
          {/* Card */}
          <div
            style={{
              maxWidth: 390,
              width: "100%",
              margin: "0 auto",
              padding: 22,
              borderRadius: 22,
              background:
                "linear-gradient(145deg, var(--mm-blue-950), var(--mm-blue-800))",
              color: "#fff",
              boxShadow: "0 24px 60px rgba(5,15,29,0.22)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                paddingBottom: 16,
                borderBottom: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 1,
                    fontWeight: 800,
                    color: "#b9c9d9",
                  }}
                >
                  MUKESH
                </div>

                <div
                  style={{
                    color: "var(--mm-red-400)",
                    fontSize: 17,
                    fontWeight: 900,
                  }}
                >
                  MANPOWER
                </div>
              </div>

              <span
                style={{
                  padding: "5px 9px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                VERIFIED
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 17,
                alignItems: "center",
                padding: "22px 0",
              }}
            >
              <div
                style={{
                  width: 76,
                  height: 92,
                  borderRadius: 13,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 28,
                }}
              >
                👤
              </div>

              <div>
                <div
                  style={{
                    color: "#aebed0",
                    fontSize: 10,
                    marginBottom: 4,
                  }}
                >
                  WORKER NAME
                </div>

                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                  }}
                >
                  APPROVED WORKER
                </div>

                <div
                  style={{
                    marginTop: 9,
                    color: "#cbd8e6",
                    fontSize: 12,
                  }}
                >
                  Position: Worker
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                paddingTop: 15,
                borderTop: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <div>
                <div style={{ color: "#aebed0", fontSize: 9 }}>
                  WORKER ID
                </div>
                <strong style={{ fontSize: 13 }}>MM-WRK-XXXX</strong>
              </div>

              <div>
                <div style={{ color: "#aebed0", fontSize: 9 }}>
                  STATUS
                </div>
                <strong style={{ fontSize: 13 }}>APPROVED</strong>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              ID CARD SYSTEM
            </div>

            <h2
              style={{
                margin: "9px 0 15px",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.15,
              }}
            >
              Every approved worker gets a clear identity.
            </h2>

            <p
              style={{
                margin: 0,
                color: "var(--mm-muted)",
                lineHeight: 1.8,
                fontSize: 14,
              }}
            >
              हमारा लक्ष्य एक ऐसा digital ID workflow बनाना है जिसमें applicant
              approval के बाद ही worker ID generate हो और management के पास
              generation का पूरा control रहे।
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span className="mm-badge mm-badge-success">
                ✓ Approval Required
              </span>

              <span className="mm-badge mm-badge-info">
                Secure ID Workflow
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "65px 0",
          background: "#fff",
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
              }}
            >
              CORE FEATURES
            </div>

            <h2
              style={{
                margin: "9px 0 0",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              Built for controlled verification
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {cardFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className="mm-card mm-card-hover"
                style={{
                  padding: 27,
                }}
              >
                <div
                  style={{
                    width: 45,
                    height: 45,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 13,
                    background: "var(--mm-blue-900)",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 13,
                    marginBottom: 18,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: "var(--mm-blue-900)",
                    fontSize: 21,
                  }}
                >
                  {feature.title}
                </h3>

                <div
                  style={{
                    marginTop: 4,
                    color: "var(--mm-red-500)",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  {feature.hindi}
                </div>

                <p
                  style={{
                    margin: "13px 0 0",
                    color: "var(--mm-muted)",
                    lineHeight: 1.75,
                    fontSize: 14,
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        style={{
          padding: "65px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div className="mm-container">
          <div
            className="mm-card"
            style={{
              padding: 30,
            }}
          >
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: 1,
              }}
            >
              APPROVAL WORKFLOW
            </div>

            <h2
              style={{
                margin: "9px 0 25px",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(26px, 4vw, 38px)",
              }}
            >
              Applicant → Approval → Worker ID
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 14,
              }}
            >
              {[
                ["01", "Application", "Candidate submits job application."],
                ["02", "Owner Approval", "Management verifies and approves."],
                ["03", "ID Generation", "Approved worker receives unique ID."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  style={{
                    padding: 20,
                    borderRadius: 16,
                    background: "#fff",
                    border: "1px solid var(--mm-border)",
                  }}
                >
                  <div
                    style={{
                      color: "var(--mm-red-500)",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    {number}
                  </div>

                  <h3
                    style={{
                      margin: "7px 0",
                      color: "var(--mm-blue-900)",
                      fontSize: 18,
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "var(--mm-muted)",
                      fontSize: 13,
                      lineHeight: 1.65,
                    }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        style={{
          padding: "20px 0 70px",
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
              fontSize: "clamp(26px, 4vw, 38px)",
            }}
          >
            Need worker verification support?
          </h2>

          <p
            style={{
              margin: "12px auto 25px",
              maxWidth: 650,
              color: "#cbd8e6",
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            MUKESH MANPOWER team से worker और ID card related information के
            लिए संपर्क करें।
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
              📞 Call Us
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

      {/* Footer */}
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
