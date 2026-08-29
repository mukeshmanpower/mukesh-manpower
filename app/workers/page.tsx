import Link from "next/link";

const workerCategories = [
  {
    title: "Machine Operators",
    hindi: "मशीन ऑपरेटर",
    description: "Manufacturing और industrial operations के लिए skilled workforce.",
    experience: "2–5 Years",
    availability: "Immediate",
  },
  {
    title: "Factory Helpers",
    hindi: "फैक्ट्री हेल्पर्स",
    description: "Production units और factory operations के लिए reliable helpers.",
    experience: "Freshers / Experienced",
    availability: "Immediate",
  },
  {
    title: "Warehouse Loaders",
    hindi: "वेयरहाउस लोडर्स",
    description: "Loading, unloading और material handling के लिए workforce.",
    experience: "Experienced",
    availability: "Immediate",
  },
  {
    title: "Packers",
    hindi: "पैकर्स",
    description: "Warehouse और manufacturing packing operations के लिए workforce.",
    experience: "Freshers / Experienced",
    availability: "Immediate",
  },
];

export default function WorkersPage() {
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
          padding: "65px 0",
        }}
      >
        <div
          className="mm-container"
          style={{
            textAlign: "center",
            maxWidth: 850,
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 18,
            }}
          >
            WORKFORCE POOL
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Skilled workforce,
            <br />
            <span style={{ color: "var(--mm-red-400)" }}>
              ready for business.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 680,
              margin: "18px auto 0",
              color: "#d1deeb",
              lineHeight: 1.7,
            }}
          >
            Companies के लिए trained, reliable और deployment-ready manpower
            categories.
          </p>
        </div>
      </section>

      {/* Worker Categories */}
      <section
        style={{
          padding: "65px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div className="mm-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--mm-red-500)",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Available Categories
              </div>

              <h2
                style={{
                  margin: "9px 0 0",
                  color: "var(--mm-blue-900)",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  letterSpacing: "-1px",
                }}
              >
                Workforce categories
              </h2>
            </div>

            <div
              className="mm-badge mm-badge-success"
              style={{ padding: "8px 13px" }}
            >
              ● Availability updated
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {workerCategories.map((worker, index) => (
              <article
                key={worker.title}
                className="mm-card mm-card-hover"
                style={{
                  padding: 26,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 80,
                    height: 80,
                    background:
                      "linear-gradient(135deg, transparent 50%, #eef4fa 50%)",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 22,
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: 13,
                      background: "var(--mm-blue-900)",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 900,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mm-badge mm-badge-success">
                    {worker.availability}
                  </span>
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: "var(--mm-blue-900)",
                    fontSize: 23,
                  }}
                >
                  {worker.title}
                </h3>

                <div
                  style={{
                    marginTop: 4,
                    color: "var(--mm-red-500)",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  {worker.hindi}
                </div>

                <p
                  style={{
                    margin: "13px 0 22px",
                    color: "var(--mm-muted)",
                    lineHeight: 1.7,
                    fontSize: 14,
                  }}
                >
                  {worker.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    paddingTop: 16,
                    borderTop: "1px solid var(--mm-border)",
                  }}
                >
                  <span className="mm-badge mm-badge-info">
                    Experience: {worker.experience}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section
        style={{
          padding: "65px 0",
          background: "#fff",
        }}
      >
        <div
          className="mm-container"
          style={{
            padding: "34px",
            borderRadius: "var(--mm-radius-xl)",
            background:
              "linear-gradient(135deg, var(--mm-blue-900), var(--mm-blue-800))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 650 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 4vw, 38px)",
                lineHeight: 1.15,
              }}
            >
              अपनी कंपनी के लिए workforce चाहिए?
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#cbd8e6",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              अपनी manpower requirement के लिए MUKESH MANPOWER से संपर्क करें।
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:6379403821"
              className="mm-button mm-button-primary"
            >
              📞 Hire Workforce
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
