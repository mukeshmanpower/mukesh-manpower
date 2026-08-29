import Link from "next/link";

const stats = [
  ["01", "Job Applications", "—", "New candidates"],
  ["02", "Active Workers", "—", "Currently deployed"],
  ["03", "Client Companies", "—", "Business accounts"],
  ["04", "Pending Payments", "₹ —", "To be collected"],
];

const modules = [
  { title: "Job Applications", hindi: "आवेदन प्रबंधन", description: "नए candidates, application status और approval workflow manage करें।", href: "/apply", icon: "📝" },
  { title: "Workers", hindi: "वर्कर प्रबंधन", description: "Worker profiles, deployment, earnings और employment records देखें।", href: "/workers", icon: "👷" },
  { title: "Attendance", hindi: "उपस्थिति प्रबंधन", description: "Daily attendance, working days और duty records manage करें।", href: "/attendance", icon: "📊" },
  { title: "Client Companies", hindi: "क्लाइंट प्रबंधन", description: "Companies, manpower requirements और client information manage करें।", href: "/companies", icon: "🏢" },
  { title: "Billing", hindi: "बिलिंग एवं भुगतान", description: "Invoices, paid amounts, pending payments और transactions track करें।", href: "/billing", icon: "🧾" },
  { title: "Worker ID Cards", hindi: "पहचान पत्र", description: "Approved workers के लिए verification और digital ID workflow manage करें।", href: "/id-cards", icon: "🪪" },
];

const workflow = [
  ["01", "Application", "Candidate applies online."],
  ["02", "Verification", "Details and documents are checked."],
  ["03", "Approval", "Management approves the candidate."],
  ["04", "Worker ID", "Unique worker identity is created."],
  ["05", "Deployment", "Worker is assigned to a client."],
  ["06", "Attendance", "Daily duty records are maintained."],
  ["07", "Billing", "Client billing is prepared."],
  ["08", "Payment", "Payments and transactions are recorded."],
];

export default function DashboardPage() {
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

      {/* Dashboard Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800))", color: "#fff", padding: "60px 0" }}>
        <div className="mm-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 25, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "inline-block", padding: "7px 13px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 11, fontWeight: 800, letterSpacing: 1, marginBottom: 16 }}>ADMIN CONTROL CENTER</div>
              <h1 style={{ margin: 0, fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1.05, letterSpacing: "-2px" }}>MUKESH MANPOWER<br /><span style={{ color: "var(--mm-red-400)" }}>Management Hub</span></h1>
              <p style={{ maxWidth: 680, margin: "18px 0 0", color: "#d1deeb", lineHeight: 1.8 }}>एक central management interface जहाँ से applications, workers, attendance, companies, billing और ID cards को एक structured workflow में manage किया जा सके।</p>
            </div>
            <div style={{ padding: "13px 16px", borderRadius: 14, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", fontSize: 12, fontWeight: 800 }}>● Management System</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "35px 0", background: "var(--mm-surface)" }}>
        <div className="mm-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 15 }}>
            {stats.map(([number, title, value, subtitle]) => (
              <div key={number} className="mm-card mm-card-hover" style={{ padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "var(--mm-red-500)", fontSize: 11, fontWeight: 900 }}>{number}</span>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--mm-red-500)" }} />
                </div>
                <div style={{ marginTop: 17, color: "var(--mm-muted)", fontSize: 12, fontWeight: 700 }}>{title}</div>
                <div style={{ marginTop: 5, color: "var(--mm-blue-900)", fontSize: 27, fontWeight: 900 }}>{value}</div>
                <div style={{ marginTop: 4, color: "var(--mm-muted)", fontSize: 11 }}>{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Modules */}
      <section style={{ padding: "35px 0 70px", background: "var(--mm-surface)" }}>
        <div className="mm-container">
          <div style={{ marginBottom: 30 }}>
            <div style={{ color: "var(--mm-red-500)", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>MANAGEMENT MODULES</div>
            <h2 style={{ margin: "9px 0 0", color: "var(--mm-blue-900)", fontSize: "clamp(28px, 4vw, 42px)" }}>Everything in one control center</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
            {modules.map((module) => (
              <Link key={module.title} href={module.href} className="mm-card mm-card-hover" style={{ padding: 25, textDecoration: "none", display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15 }}>
                  <div style={{ width: 48, height: 48, display: "grid", placeItems: "center", borderRadius: 14, background: "var(--mm-blue-900)", fontSize: 21 }}>{module.icon}</div>
                  <span style={{ color: "var(--mm-red-500)", fontSize: 20, fontWeight: 900 }}>→</span>
                </div>
                <h3 style={{ margin: "20px 0 4px", color: "var(--mm-blue-900)", fontSize: 21 }}>{module.title}</h3>
                <div style={{ color: "var(--mm-red-500)", fontSize: 12, fontWeight: 800 }}>{module.hindi}</div>
                <p style={{ margin: "13px 0 0", color: "var(--mm-muted)", fontSize: 13, lineHeight: 1.75 }}>{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section style={{ padding: "70px 0", background: "#fff" }}>
        <div className="mm-container">
          <div style={{ marginBottom: 30 }}>
            <div style={{ color: "var(--mm-red-500)", fontSize: 13, fontWeight: 800, letterSpacing: 1 }}>BUSINESS WORKFLOW</div>
            <h2 style={{ margin: "9px 0 0", color: "var(--mm-blue-900)", fontSize: "clamp(28px, 4vw, 42px)" }}>Complete manpower lifecycle</h2>
            <p style={{ maxWidth: 700, marginTop: 12, color: "var(--mm-muted)", lineHeight: 1.7, fontSize: 14 }}>यही workflow आगे चलकर real database, authentication और management actions से connect किया जाएगा।</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 14 }}>
            {workflow.map(([number, title, description]) => (
              <div key={number} className="mm-card" style={{ padding: 20 }}>
                <div style={{ color: "var(--mm-red-500)", fontSize: 11, fontWeight: 900 }}>{number}</div>
                <h3 style={{ margin: "7px 0", color: "var(--mm-blue-900)", fontSize: 17 }}>{title}</h3>
                <p style={{ margin: 0, color: "var(--mm-muted)", fontSize: 12, lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{ padding: "20px 0 70px", background: "#fff" }}>
        <div className="mm-container" style={{ padding: "38px", borderRadius: "var(--mm-radius-xl)", background: "linear-gradient(135deg, var(--mm-blue-900), var(--mm-blue-800))", color: "#fff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 25, flexWrap: "wrap" }}>
            <div>
              <div style={{ color: "var(--mm-red-400)", fontSize: 12, fontWeight: 900, letterSpacing: 1 }}>QUICK ACTION</div>
              <h2 style={{ margin: "8px 0 8px", fontSize: "clamp(25px, 4vw, 36px)" }}>Ready to manage your workforce?</h2>
              <p style={{ margin: 0, color: "#cbd8e6", fontSize: 13 }}>सबसे जरूरी management modules पर सीधे जाएँ।</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link href="/apply" className="mm-button mm-button-primary">📝 Applications</Link>
              <Link href="/workers" className="mm-button" style={{ color: "#fff", background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}>👷 Workers</Link>
              <Link href="/billing" className="mm-button" style={{ color: "#fff", background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}>🧾 Billing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#050f1d", color: "#aebed0", padding: "28px 0" }}>
        <div className="mm-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
          <strong style={{ color: "#fff" }}>MUKESH MANPOWER</strong>
          <span style={{ fontSize: 12 }}>Professional Workforce Management System</span>
        </div>
      </footer>
    </main>
  );
      }
              
