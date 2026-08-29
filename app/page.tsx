import Link from "next/link";
import AdSlider from "@/components/AdSlider";

const locations = [
  {
    city: "Delhi NCR",
    description: "Manufacturing, industrial & warehouse workforce",
  },
  {
    city: "Tamil Nadu",
    description: "Industrial, textile & engineering workforce",
  },
  {
    city: "Hyderabad",
    description: "Warehouse, logistics & industrial workforce",
  },
  {
    city: "Bengaluru",
    description: "Technology, logistics & support workforce",
  },
];

const services = [
  {
    number: "01",
    title: "Industrial Manpower",
    description:
      "Factories, manufacturing units and industrial operations के लिए reliable workforce solutions.",
  },
  {
    number: "02",
    title: "Warehouse & Logistics",
    description:
      "Warehouse, loading, packing और logistics operations के लिए workforce support.",
  },
  {
    number: "03",
    title: "Workforce Management",
    description:
      "Attendance, worker records, deployment और workforce operations को व्यवस्थित करने की सुविधा.",
  },
];

export default function HomePage() {
  return (
    <main>
      <AdSlider />
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
            gap: 20,
          }}
        >
          <Link
            href="/"
            aria-label="MUKESH MANPOWER Home"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 900,
              letterSpacing: "-0.5px",
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

            <span style={{ fontSize: 18 }}>
              MUKESH{" "}
              <span style={{ color: "var(--mm-red-500)" }}>MANPOWER</span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Link
              href="/apply"
              className="mm-button mm-button-primary"
              style={{ minHeight: 40, padding: "8px 16px" }}
            >
              Apply for Job
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, var(--mm-blue-950) 0%, var(--mm-blue-900) 55%, var(--mm-blue-800) 100%)",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(230,57,70,0.14)",
            top: -180,
            right: -100,
            filter: "blur(10px)",
          }}
        />

        <div
          className="mm-container"
          style={{
            position: "relative",
            paddingTop: 90,
            paddingBottom: 90,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.6fr)",
            gap: 50,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 12px",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 999,
                background: "rgba(255,255,255,0.07)",
                color: "#dce7f5",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 22,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--mm-red-500)",
                }}
              />
              Professional Workforce Solutions
            </div>

            <h1
              style={{
                margin: 0,
                maxWidth: 780,
                fontSize: "clamp(42px, 6vw, 76px)",
                lineHeight: 0.98,
                letterSpacing: "-3px",
                fontWeight: 900,
              }}
            >
              RIGHT PEOPLE.
              <br />
              <span style={{ color: "var(--mm-red-400)" }}>
                RIGHT PLACE.
              </span>
              <br />
              RIGHT TIME.
            </h1>

            <p
              style={{
                margin: "26px 0 0",
                maxWidth: 650,
                color: "#d8e2ee",
                fontSize: "clamp(17px, 2vw, 21px)",
                lineHeight: 1.65,
              }}
            >
              आपकी ज़रूरत, हमारी ज़िम्मेदारी।
              <br />
              Companies के लिए reliable manpower और job seekers के लिए
              professional opportunities.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 30,
              }}
            >
              <Link href="/apply" className="mm-button mm-button-primary">
                📝 Job के लिए Apply करें
              </Link>

              <a
                href="tel:6379403821"
                className="mm-button"
                style={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                📞 Contact Us
              </a>
            </div>
          </div>

          <div
            className="mm-card"
            style={{
              padding: 26,
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.14)",
              color: "#fff",
              boxShadow: "none",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#b9c9dc",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              MUKESH MANPOWER
            </div>

            <h2
              style={{
                margin: "12px 0",
                fontSize: 30,
                lineHeight: 1.15,
              }}
            >
              Workforce that
              <br />
              moves business.
            </h2>

            <p
              style={{
                margin: 0,
                color: "#c8d5e4",
                lineHeight: 1.7,
                fontSize: 14,
              }}
            >
              Professional manpower supply और workforce management को एक
              व्यवस्थित platform पर लाने की दिशा में बनाया गया system.
            </p>

            <div
              style={{
                marginTop: 24,
                paddingTop: 18,
                borderTop: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div>
                <strong style={{ fontSize: 24 }}>24/7</strong>
                <div style={{ fontSize: 12, color: "#aebfd3" }}>
                  Digital Access
                </div>
              </div>

              <div>
                <strong style={{ fontSize: 24 }}>4+</strong>
                <div style={{ fontSize: 12, color: "#aebfd3" }}>
                  Target Hubs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "80px 0", background: "#fff" }}>
        <div className="mm-container">
          <div style={{ maxWidth: 720, marginBottom: 38 }}>
            <div
              style={{
                color: "var(--mm-red-500)",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              What We Do
            </div>

            <h2
              style={{
                margin: "10px 0 12px",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Manpower solutions built for real business needs.
            </h2>

            <p
              style={{
                margin: 0,
                color: "var(--mm-muted)",
                lineHeight: 1.7,
              }}
            >
              सही workforce को सही operation तक पहुँचाने के लिए professional
              और scalable manpower support.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {services.map((service) => (
              <article
                key={service.number}
                className="mm-card mm-card-hover"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    color: "var(--mm-red-500)",
                    fontSize: 13,
                    fontWeight: 900,
                    marginBottom: 34,
                  }}
                >
                  {service.number}
                </div>

                <h3
                  style={{
                    margin: "0 0 12px",
                    color: "var(--mm-blue-900)",
                    fontSize: 22,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "var(--mm-muted)",
                    lineHeight: 1.7,
                    fontSize: 14,
                  }}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section
        style={{
          padding: "80px 0",
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
              marginBottom: 34,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  color: "var(--mm-red-500)",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Target Hubs
              </div>

              <h2
                style={{
                  margin: "10px 0 0",
                  color: "var(--mm-blue-900)",
                  fontSize: "clamp(30px, 4vw, 44px)",
                  letterSpacing: "-1.5px",
                }}
              >
                Where we serve
              </h2>
            </div>

            <span
              style={{
                padding: "7px 12px",
                borderRadius: 999,
                background: "#fff",
                border: "1px solid var(--mm-border)",
                color: "var(--mm-muted)",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              Expanding Workforce Network
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {locations.map((location) => (
              <article
                key={location.city}
                className="mm-card mm-card-hover"
                style={{ padding: 24 }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 12,
                    background: "#edf4fc",
                    color: "var(--mm-blue-800)",
                    fontWeight: 900,
                    marginBottom: 22,
                  }}
                >
                  +
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    color: "var(--mm-blue-900)",
                    fontSize: 19,
                  }}
                >
                  {location.city}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "var(--mm-muted)",
                    lineHeight: 1.6,
                    fontSize: 13,
                  }}
                >
                  {location.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 0",
          background: "var(--mm-blue-900)",
          color: "#fff",
        }}
      >
        <div
          className="mm-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Need reliable manpower?
            </h2>

            <p
              style={{
                margin: "14px 0 0",
                color: "#cbd8e7",
                lineHeight: 1.7,
              }}
            >
              अपनी company की manpower requirement के लिए MUKESH MANPOWER से
              संपर्क करें।
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a href="tel:6379403821" className="mm-button mm-button-primary">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/916379403821"
              target="_blank"
              rel="noreferrer"
              className="mm-button"
              style={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
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
          padding: "28px 0",
          background: "#050f1d",
          color: "#aebed0",
        }}
      >
        <div
          className="mm-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong style={{ color: "#fff" }}>MUKESH MANPOWER</strong>
            <div style={{ fontSize: 12, marginTop: 5 }}>
              Professional Workforce Solutions
            </div>
          </div>

          <div style={{ fontSize: 12 }}>
            © {new Date().getFullYear()} MUKESH MANPOWER. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
                }
                  
