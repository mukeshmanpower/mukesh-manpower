import Link from "next/link";

const billingFeatures = [
  {
    title: "Professional Invoices",
    hindi: "प्रोफेशनल इनवॉइस",
    description: "Client companies के लिए structured manpower billing और invoice workflow.",
  },
  {
    title: "Payment Tracking",
    hindi: "भुगतान ट्रैकिंग",
    description: "Paid, pending और outstanding amounts को व्यवस्थित तरीके से track करने की foundation.",
  },
  {
    title: "Worker Earnings",
    hindi: "वर्कर कमाई",
    description: "Worker के working days, earnings, paid amount और pending amount को billing system से जोड़ने की व्यवस्था.",
  },
  {
    title: "Transaction History",
    hindi: "लेन-देन इतिहास",
    description: "हर payment और billing activity के लिए future-ready transaction record.",
  },
];

export default function BillingPage() {
  return (
    <main>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--mm-border)" }}>
        <div className="mm-container" style={{ minHeight: 72, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900 }}>
            <span style={{ width: 38, height: 38, display: "grid", placeItems: "center", borderRadius: 11, background: "var(--mm-blue-900)", color: "#fff", fontSize: 14 }}>MM</span>
            <span style={{ fontSize: 17 }}>MUKESH <span style={{ color: "var(--mm-red-500)" }}>MANPOWER</span></span>
          </Link>
          <Link href="/" className="mm-button mm-button-outline">← Home</Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))", color: "#fff", padding: "70px 0" }}>
        <div className="mm-container" style={{ maxWidth: 950, textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "7px 13px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 12, fontWeight: 800, letterSpacing: 1, marginBottom: 18 }}>BILLING & FINANCE</div>
          <h1 style={{ margin: 0, fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-2px" }}>Smarter manpower<br /><span style={{ color: "var(--mm-red-400)" }}>billing management.</span></h1>
          <p style={{ maxWidth: 700, margin: "20px auto 0", color: "#d1deeb", lineHeight: 1.8 }}>Client billing, worker earnings, payments और transaction records को एक professional management system में व्यवस्थित करने की foundation.</p>
        </div>
      </section>

      {/* Billing Summary */}
      <section style={{ padding: "65px 0", background: "var(--mm-surface)" }}>
        <div className="mm-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 15 }}>
            {[
              ["01", "Total Billing", "₹ —"],
              ["02", "Paid Amount", "₹ —"],
              ["03", "Pending Amount", "₹ —"],
              ["04", "Transactions", "—"],
            ].map(([number, title, value]) => (
              <div key={number} className="mm-card mm-card-hover" style={{ padding: 22 }}>
                <div style={{ color: "var(--mm-red-500)", fontSize: 11, fontWeight: 900 }}>{number}</div>
                <div style={{ marginTop: 14, color: "var(--mm-muted)", fontSize: 12, fontWeight: 700 }}>{title}</div>
                <div style={{ marginTop: 5, color: "var(--mm-blue-900)", fontSize: 25, fontWeight: 900 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invoice Preview */}
      <section style={{ padding: "0 0 65px", background: "var(--mm-surface)" }}>
        <div className="mm-container" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)", gap: 30, alignItems: "center" }}>
          {/* Invoice */}
          <div className="mm-card" style={{ padding: 0, overflow: "hidden", background: "#fff", boxShadow: "0 24px 60px rgba(5,15,29,0.10)" }}>
            <div style={{ padding: 24, background: "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))", color: "#fff" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 15, alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#b9c9d9", letterSpacing: 1 }}>MUKESH</div>
                  <div style={{ fontSize: 21, fontWeight: 900, color: "var(--mm-red-400)" }}>MANPOWER</div>
                  <div style={{ marginTop: 8, fontSize: 11, color: "#cbd8e6" }}>Professional Workforce Solutions</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, fontWeight: 900 }}>INVOICE</div>
                  <div style={{ marginTop: 4, fontSize: 11, color: "#b9c9d9" }}>MM-INV-XXXX</div>
                </div>
              </div>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, paddingBottom: 20, borderBottom: "1px solid var(--mm-border)" }}>
                <div>
                  <div style={{ color: "var(--mm-muted)", fontSize: 10, fontWeight: 800 }}>BILL TO</div>
                  <strong style={{ display: "block", marginTop: 5, color: "var(--mm-blue-900)" }}>CLIENT COMPANY</strong>
                  <span style={{ color: "var(--mm-muted)", fontSize: 11 }}>Company billing account</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "var(--mm-muted)", fontSize: 10, fontWeight: 800 }}>BILLING PERIOD</div>
                  <strong style={{ display: "block", marginTop: 5, color: "var(--mm-blue-900)" }}>MONTH / YEAR</strong>
                </div>
              </div>
              <div style={{ paddingTop: 20 }}>
                {[
                  ["Manpower Services", "₹ —"],
                  ["Worker Deployment", "₹ —"],
                  ["Additional Services", "₹ —"],
                ].map(([label, amount]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: 15, padding: "11px 0", borderBottom: "1px solid #eef1f4", fontSize: 13 }}>
                    <span style={{ color: "var(--mm-muted)" }}>{label}</span>
                    <strong style={{ color: "var(--mm-blue-900)" }}>{amount}</strong>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20, padding: "16px 0 0", borderTop: "2px solid var(--mm-blue-900)" }}>
                <strong style={{ color: "var(--mm-blue-900)" }}>TOTAL</strong>
                <strong style={{ color: "var(--mm-red-500)", fontSize: 20 }}>₹ —</strong>
              </div>
            </div>
          </div>
          {/* Text */}
          <div>
            <div style={{ color: "var(--mm-red-500)", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>INVOICE MANAGEMENT</div>
            <h2 style={{ margin: "9px 0 15px", color: "var(--mm-blue-900)", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15 }}>Professional billing from one place.</h2>
            <p style={{ margin: 0, color: "var(--mm-muted)", lineHeight: 1.8, fontSize: 14 }}>आगे चलकर इसी system में client selection, worker deployment, attendance, service charges, invoice generation, payment recording और PDF invoice जैसे features जोड़े जा सकते हैं।</p>
            <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span className="mm-badge mm-badge-info">Invoice Ready</span>
              <span className="mm-badge mm-badge-success">Payment Tracking</span>
              <span className="mm-badge">Transaction History</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "65px 0", background: "#fff" }}>
        <div className="mm-container">
          <div style={{ marginBottom: 30 }}>
            <div style={{ color: "var(--mm-red-500)", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>CORE FEATURES</div>
            <h2 style={{ margin: "9px 0 0", color: "var(--mm-blue-900)", fontSize: "clamp(28px, 4vw, 42px)" }}>Complete billing foundation</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 18 }}>
            {billingFeatures.map((feature, index) => (
              <article key={feature.title} className="mm-card mm-card-hover" style={{ padding: 27 }}>
                <div style={{ width: 45, height: 45, display: "grid", placeItems: "center", borderRadius: 13, background: "var(--mm-blue-900)", color: "#fff", fontWeight: 900, fontSize: 13, marginBottom: 18 }}>{String(index + 1).padStart(2, "0")}</div>
                <h3 style={{ margin: 0, color: "var(--mm-blue-900)", fontSize: 21 }}>{feature.title}</h3>
                <div style={{ marginTop: 4, color: "var(--mm-red-500)", fontSize: 12, fontWeight: 800 }}>{feature.hindi}</div>
                <p style={{ margin: "13px 0 0", color: "var(--mm-muted)", lineHeight: 1.75, fontSize: 14 }}>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: "65px 0", background: "var(--mm-surface)" }}>
        <div className="mm-container">
          <div className="mm-card" style={{ padding: 30 }}>
            <div style={{ color: "var(--mm-red-500)", fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>BILLING WORKFLOW</div>
            <h2 style={{ margin: "9px 0 25px", color: "var(--mm-blue-900)", fontSize: "clamp(26px, 4vw, 38px)" }}>Attendance → Billing → Payment → History</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12 }}>
              {[
                ["01", "Attendance", "Working days and duty records."],
                ["02", "Invoice", "Generate client billing."],
                ["03", "Payment", "Record paid and pending amounts."],
                ["04", "History", "Maintain transaction records."],
              ].map(([number, title, description]) => (
                <div key={number} style={{ padding: 18, borderRadius: 16, background: "#fff", border: "1px solid var(--mm-border)" }}>
                  <div style={{ color: "var(--mm-red-500)", fontSize: 12, fontWeight: 900 }}>{number}</div>
                  <h3 style={{ margin: "7px 0", color: "var(--mm-blue-900)", fontSize: 17 }}>{title}</h3>
                  <p style={{ margin: 0, color: "var(--mm-muted)", fontSize: 12, lineHeight: 1.65 }}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "20px 0 70px", background: "var(--mm-surface)" }}>
        <div className="mm-container" style={{ padding: "36px", borderRadius: "var(--mm-radius-xl)", background: "linear-gradient(135deg, var(--mm-blue-900), var(--mm-blue-800))", color: "#fff", textAlign: "center" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(26px, 4vw, 38px)" }}>Need billing information?</h2>
          <p style={{ margin: "12px auto 25px", maxWidth: 650, color: "#cbd8e6", lineHeight: 1.7, fontSize: 14 }}>Billing और invoice related information के लिए MUKESH MANPOWER team से संपर्क करें।</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            <a href="tel:6379403821" className="mm-button mm-button-primary">📞 Call Us</a>
            <a href="https://wa.me/916379403821" target="_blank" rel="noreferrer" className="mm-button" style={{ color: "#fff", background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#050f1d", color: "#aebed0", padding: "28px 0" }}>
        <div className="mm-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
          <strong style={{ color: "#fff" }}>MUKESH MANPOWER</strong>
          <span style={{ fontSize: 12 }}>Professional Workforce Solutions</span>
        </div>
      </footer>
    </main>
  );
            }
                           
