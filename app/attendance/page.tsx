import Link from "next/link";

const attendanceStats = [
  { label: "Today's Attendance", value: "—", note: "Live records will appear here" },
  { label: "Present Workers", value: "—", note: "Connected to management system" },
  { label: "Working Hours", value: "—", note: "Calculated from check-in/out" },
];

const features = [
  {
    title: "Daily Check-In",
    hindi: "दैनिक उपस्थिति",
    description: "Worker की daily duty और check-in record व्यवस्थित तरीके से दर्ज करने के लिए।",
  },
  {
    title: "Check-Out & Hours",
    hindi: "चेक-आउट एवं कार्य घंटे",
    description: "Check-in और check-out के आधार पर working hours तथा overtime track करने के लिए।",
  },
  {
    title: "Attendance History",
    hindi: "उपस्थिति इतिहास",
    description: "Worker की date-wise attendance history को future management system में सुरक्षित रखने के लिए।",
  },
  {
    title: "Management Review",
    hindi: "मैनेजमेंट समीक्षा",
    description: "Admin और company management को attendance records review करने की सुविधा।",
  },
];

export default function AttendancePage() {
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
            ATTENDANCE MANAGEMENT
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-2px",
            }}
          >
            Track every duty,
            <br />
            <span style={{ color: "var(--mm-red-400)" }}>
              manage every hour.
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
            MUKESH MANPOWER के लिए daily attendance, working hours और workforce
            records को एक professional management system में लाने की foundation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          marginTop: -28,
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          className="mm-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {attendanceStats.map((stat) => (
            <div
              key={stat.label}
              className="mm-card"
              style={{
                padding: 23,
                background: "#fff",
              }}
            >
              <div
                style={{
                  color: "var(--mm-muted)",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  marginTop: 8,
                  color: "var(--mm-blue-900)",
                  fontSize: 30,
                  fontWeight: 900,
                }}
              >
                {stat.value}
              </div>

              <div
                style={{
                  marginTop: 5,
                  color: "var(--mm-muted)",
                  fontSize: 11,
                }}
              >
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "70px 0",
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
              Complete attendance workflow
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="mm-card mm-card-hover"
                style={{
                  padding: 27,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 18,
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
                      fontWeight: 900,
                      fontSize: 13,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
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
                        marginTop: 3,
                        color: "var(--mm-red-500)",
                        fontSize: 12,
                        fontWeight: 800,
                      }}
                    >
                      {feature.hindi}
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    margin: 0,
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

      {/* Current Workflow */}
      <section
        style={{
          padding: "65px 0",
          background: "#fff",
        }}
      >
        <div className="mm-container">
          <div
            className="mm-card"
            style={{
              padding: 30,
              borderLeft: "5px solid var(--mm-red-500)",
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
              SYSTEM FOUNDATION
            </div>

            <h2
              style={{
                margin: "9px 0 10px",
                color: "var(--mm-blue-900)",
                fontSize: "clamp(25px, 4vw, 36px)",
              }}
            >
              Attendance system is being prepared
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: 760,
                color: "var(--mm-muted)",
                lineHeight: 1.8,
                fontSize: 14,
              }}
            >
              अभी यह page management system की foundation है। आगे database और
              authenticated worker/admin portal जुड़ने के बाद यहाँ वास्तविक
              attendance records, check-in, check-out, working hours और history
              दिखाई जाएगी।
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(26px, 4vw, 38px)",
            }}
          >
            Attendance या workforce support चाहिए?
          </h2>

          <p
            style={{
              maxWidth: 650,
              margin: "12px auto 25px",
              color: "#cbd8e6",
              lineHeight: 1.7,
              fontSize: 14,
            }}
          >
            MUKESH MANPOWER team से सीधे संपर्क करें।
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
