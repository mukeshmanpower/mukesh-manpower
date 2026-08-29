import Link from "next/link";

const workers = [
  {
    id: "MM-WRK-0001",
    name: "Raj Kumar",
    position: "Machine Operator",
    company: "Industrial Client",
    status: "Active",
    experience: "4 Years",
    attendance: "26 Days",
    earning: "₹28,500",
  },
  {
    id: "MM-WRK-0002",
    name: "Amit Kumar",
    position: "Factory Helper",
    company: "Manufacturing Client",
    status: "Active",
    experience: "2 Years",
    attendance: "24 Days",
    earning: "₹22,000",
  },
  {
    id: "MM-WRK-0003",
    name: "Rahul Das",
    position: "Warehouse Loader",
    company: "Logistics Client",
    status: "Active",
    experience: "3 Years",
    attendance: "25 Days",
    earning: "₹24,500",
  },
];

const categories = [
  ["01", "Machine Operators", "Skilled industrial operators"],
  ["02", "Factory Helpers", "Production & factory support"],
  ["03", "Warehouse Loaders", "Loading & material handling"],
  ["04", "Packers", "Packing & warehouse operations"],
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
                width: 40,
                height: 40,
                display: "grid",
                placeItems: "center",
                borderRadius: 12,
                background: "var(--mm-blue-900)",
                color: "#fff",
                fontSize: 13,
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
            WORKFORCE MANAGEMENT
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Manage your workforce
            <br />
            <span style={{ color: "var(--mm-red-400)" }}>
              with confidence.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 700,
              margin: "20px auto 0",
              color: "#d1deeb",
              lineHeight: 1.8,
              fontSize: 15,
            }}
          >
            Worker profiles, deployment, attendance, earnings और workforce
            records को एक organized management system में रखने की foundation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section
        style={{
          padding: "55px 0 25px",
          background: "var(--mm-surface)",
        }}
      >
        <div className="mm-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 15,
            }}
          >
            {[
              ["Total Workers", "128", "Registered workforce"],
              ["Active Workers", "96", "Currently deployed"],
              ["Available", "32", "Ready for deployment"],
              ["Attendance", "94%", "Current performance"],
            ].map(([title, value, description]) => (
              <div
                key={title}
                className="mm-card"
                style={{
                  padding: 22,
                }}
              >
                <div
                  style={{
                    color: "var(--mm-muted)",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    marginTop: 7,
                    color: "var(--mm-blue-900)",
                    fontSize: 30,
                    fontWeight: 900,
                  }}
                >
                  {value}
                </div>

                <div
                  style={{
                    marginTop: 4,
                    color: "var(--mm-red-500)",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Records */}
      <section
        style={{
          padding: "55px 0",
          background: "var(--mm-surface)",
        }}
      >
        <div className="mm-container">
          <div style={{ marginBottom: 25 }}>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              WORKER DIRECTORY
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              Worker records
            </h2>

            <p
              style={{
                margin: "8px 0 0",
                color: "var(--mm-muted)",
                fontSize: 14,
              }}
            >
              Registered workers की basic management information.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 16,
            }}
          >
            {workers.map((worker) => (
              <article
                key={worker.id}
                className="mm-card mm-card-hover"
                style={{
                  padding: 22,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "minmax(220px, 1.4fr) repeat(4, minmax(110px, 1fr))",
                    gap: 18,
                    alignItems: "center",
                  }}
                >
                  {/* Worker */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 13,
                      }}
                    >
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          display: "grid",
                          placeItems: "center",
                          background: "var(--mm-blue-900)",
                          color: "#fff",
                          fontWeight: 900,
                        }}
                      >
                        {worker.name.charAt(0)}
                      </div>

                      <div>
                        <h3
                          style={{
                            margin: 0,
                            color: "var(--mm-blue-900)",
                            fontSize: 18,
                          }}
                        >
                          {worker.name}
                        </h3>

                        <div
                          style={{
                            marginTop: 3,
                            color: "var(--mm-red-500)",
                            fontSize: 11,
                            fontWeight: 800,
                          }}
                        >
                          {worker.id}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Position */}
                  <div>
                    <div
                      style={{
                        color: "var(--mm-muted)",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      POSITION
                    </div>

                    <div
                      style={{
                        marginTop: 5,
                        color: "var(--mm-blue-900)",
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      {worker.position}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <div
                      style={{
                        color: "var(--mm-muted)",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      COMPANY
                    </div>

                    <div
                      style={{
                        marginTop: 5,
                        color: "var(--mm-blue-900)",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {worker.company}
                    </div>
                  </div>

                  {/* Attendance */}
                  <div>
                    <div
                      style={{
                        color: "var(--mm-muted)",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      ATTENDANCE
                    </div>

                    <div
                      style={{
                        marginTop: 5,
                        color: "var(--mm-blue-900)",
                        fontSize: 13,
                        fontWeight: 800,
                      }}
                    >
                      {worker.attendance}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <span className="mm-badge mm-badge-success">
                      ● {worker.status}
                    </span>

                    <div
                      style={{
                        marginTop: 7,
                        color: "var(--mm-muted)",
                        fontSize: 11,
                      }}
                    >
                      {worker.earning}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "60px 0",
          background: "#fff",
        }}
      >
        <div className="mm-container">
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 1,
              }}
            >
              WORKFORCE CATEGORIES
            </div>

            <h2
              style={{
                margin: "8px 0 0",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              Workforce by role
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {categories.map(([number, title, description]) => (
              <div
                key={number}
                className="mm-card mm-card-hover"
                style={{
                  padding: 23,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 12,
                    background: "var(--mm-blue-900)",
                    color: "#fff",
                    fontSize: 12,
                    fontWeight: 900,
                  }}
                >
                  {number}
                </div>

                <h3
                  style={{
                    margin: "17px 0 5px",
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
      </section>

      {/* Management CTA */}
      <section
        style={{
          padding: "20px 0 70px",
          background: "#fff",
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
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            MUKESH MANPOWER
          </div>

          <h2
            style={{
              margin: "15px 0 10px",
              fontSize: "clamp(26px, 4vw, 38px)",
            }}
          >
            Need workforce for your business?
          </h2>

          <p
            style={{
              maxWidth: 650,
              margin: "0 auto 24px",
              color: "#cbd8e6",
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            अपनी company की manpower requirement के लिए हमारी team से संपर्क
            करें।
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
              
