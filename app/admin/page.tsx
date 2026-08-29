import Link from "next/link";

const stats = [
  { value: "24", label: "Total Applications", hindi: "कुल आवेदन", icon: "📋" },
  { value: "18", label: "Active Workers", hindi: "सक्रिय वर्कर्स", icon: "👷" },
  { value: "06", label: "Client Companies", hindi: "क्लाइंट कंपनियां", icon: "🏢" },
  { value: "03", label: "Pending Approvals", hindi: "लंबित मंजूरी", icon: "⏳" },
];

const modules = [
  { href: "/apply", icon: "📋", title: "Job Applications", hindi: "जॉब आवेदन", description: "नए candidates और applications को manage करें।", action: "Open Applications" },
  { href: "/workers", icon: "👷", title: "Workers", hindi: "वर्कर मैनेजमेंट", description: "Worker profiles, status और employment records manage करें।", action: "Manage Workers" },
  { href: "/attendance", icon: "🕘", title: "Attendance", hindi: "उपस्थिति", description: "Daily attendance और duty tracking के लिए central section.", action: "View Attendance" },
  { href: "/companies", icon: "🏢", title: "Companies", hindi: "क्लाइंट मैनेजमेंट", description: "Client companies और manpower requirements manage करें।", action: "Manage Companies" },
  { href: "/billing", icon: "₹", title: "Billing & Invoices", hindi: "बिलिंग और भुगतान", description: "Invoices, payments और financial records के लिए foundation.", action: "Open Billing" },
  { href: "/id-cards", icon: "🪪", title: "Worker ID Cards", hindi: "वर्कर आईडी कार्ड", description: "Approved workers के digital identification workflow को manage करें।", action: "Manage ID Cards" },
];

const activity = [
  { title: "New job application received", description: "एक नया candidate application submit हुआ।", time: "Today", type: "Application" },
  { title: "Worker approval required", description: "एक worker profile management approval का इंतजार कर रही है।", time: "Today", type: "Approval" },
  { title: "Attendance record pending", description: "आज का attendance record update करना बाकी है।", time: "Today", type: "Attendance" },
];

export default function AdminPage() {
  return (
    <main className="mm-admin-page">
      {/* Header */}
      <header className="mm-admin-header">
        <div className="mm-container mm-admin-header-inner">
          <Link href="/" className="mm-admin-brand">
            <span className="mm-admin-logo">MM</span>
            <span>MUKESH <strong><span>MANPOWER</span></strong></span>
          </Link>
          <div className="mm-admin-header-actions">
            <span className="mm-admin-status"><i /> System Online</span>
            <Link href="/" className="mm-button mm-button-outline">← Website</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mm-admin-hero">
        <div className="mm-container">
          <div className="mm-admin-hero-content">
            <div>
              <span className="mm-admin-eyebrow">MANAGEMENT CONTROL CENTER</span>
              <h1>MUKESH MANPOWER<br /><span>Admin Dashboard</span></h1>
              <p>आपकी manpower operations, workers, applications, attendance, companies और billing को एक central management system में organize करने की foundation.</p>
            </div>
            <div className="mm-admin-owner-card">
              <span className="mm-owner-label">MANAGEMENT</span>
              <strong>Owner Control</strong>
              <small>Full operational overview</small>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mm-admin-stats-section">
        <div className="mm-container">
          <div className="mm-admin-stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className="mm-admin-stat-card">
                <div className="mm-stat-top">
                  <span className="mm-stat-icon">{stat.icon}</span>
                  <span className="mm-stat-live">LIVE</span>
                </div>
                <strong>{stat.value}</strong>
                <h3>{stat.label}</h3>
                <p>{stat.hindi}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Modules */}
      <section className="mm-admin-modules-section">
        <div className="mm-container">
          <div className="mm-admin-section-heading">
            <div>
              <span className="mm-admin-section-label">CONTROL MODULES</span>
              <h2>Manage your business from one place.</h2>
            </div>
            <p>हर operational section के लिए dedicated management module.</p>
          </div>
          <div className="mm-admin-module-grid">
            {modules.map((module) => (
              <article key={module.title} className="mm-admin-module-card">
                <div className="mm-module-top">
                  <span className="mm-module-icon">{module.icon}</span>
                  <span className="mm-module-arrow">↗</span>
                </div>
                <h3>{module.title}</h3>
                <span className="mm-module-hindi">{module.hindi}</span>
                <p>{module.description}</p>
                <Link href={module.href} className="mm-module-link">
                  {module.action}
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operations + Activity */}
      <section className="mm-admin-operations-section">
        <div className="mm-container mm-admin-operations-grid">
          {/* Operations */}
          <div className="mm-admin-panel">
            <div className="mm-panel-heading">
              <div>
                <span className="mm-admin-section-label">QUICK OPERATIONS</span>
                <h2>Common actions</h2>
              </div>
            </div>
            <div className="mm-quick-actions">
              <Link href="/apply" className="mm-quick-action">
                <span>📋</span>
                <div>
                  <strong>Review Applications</strong>
                  <small>Candidate records देखें</small>
                </div>
                <b>→</b>
              </Link>
              <Link href="/workers" className="mm-quick-action">
                <span>👷</span>
                <div>
                  <strong>Worker Management</strong>
                  <small>Worker profiles manage करें</small>
                </div>
                <b>→</b>
              </Link>
              <Link href="/attendance" className="mm-quick-action">
                <span>🕘</span>
                <div>
                  <strong>Update Attendance</strong>
                  <small>Daily duty records देखें</small>
                </div>
                <b>→</b>
              </Link>
              <Link href="/billing" className="mm-quick-action">
                <span>₹</span>
                <div>
                  <strong>Billing Center</strong>
                  <small>Invoice और payment records</small>
                </div>
                <b>→</b>
              </Link>
            </div>
          </div>

          {/* Activity */}
          <div className="mm-admin-panel">
            <div className="mm-panel-heading">
              <div>
                <span className="mm-admin-section-label">RECENT ACTIVITY</span>
                <h2>Latest updates</h2>
              </div>
              <span className="mm-activity-count">3</span>
            </div>
            <div className="mm-activity-list">
              {activity.map((item) => (
                <div key={item.title} className="mm-activity-item">
                  <span className="mm-activity-dot" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                    <small>{item.type} · {item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Architecture */}
      <section className="mm-admin-future-section">
        <div className="mm-container">
          <div className="mm-future-dashboard">
            <div>
              <span className="mm-admin-section-label">NEXT-GENERATION MANAGEMENT</span>
              <h2>One dashboard. Complete workforce control.</h2>
              <p>यह dashboard आगे चलकर secure login, real database, owner approval, worker records, attendance, salary, advances, invoices, notifications और ID verification system से connect किया जाएगा।</p>
            </div>
            <div className="mm-future-badges">
              <span>Secure Access</span>
              <span>Worker Database</span>
              <span>Approval Workflow</span>
              <span>Financial Records</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mm-admin-footer">
        <div className="mm-container mm-admin-footer-inner">
          <div>
            <strong>MUKESH MANPOWER</strong>
            <span>Professional Workforce Solutions</span>
          </div>
          <span>Management Control Center</span>
        </div>
      </footer>

      {/* Responsive page styling */}
      <style>{`
        .mm-admin-page { min-height: 100vh; background: var(--mm-surface); }
        .mm-admin-header { position: sticky; top: 0; z-index: 100; background: rgba(255,255,255,0.96); backdrop-filter: blur(16px); border-bottom: 1px solid var(--mm-border); }
        .mm-admin-header-inner { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .mm-admin-brand { display: flex; align-items: center; gap: 11px; color: var(--mm-blue-900); font-size: 16px; font-weight: 900; }
        .mm-admin-brand strong span { color: var(--mm-red-500); }
        .mm-admin-logo { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px; background: var(--mm-blue-900); color: #fff; font-size: 12px; font-weight: 900; }
        .mm-admin-header-actions { display: flex; align-items: center; gap: 12px; }
        .mm-admin-status { display: flex; align-items: center; gap: 7px; color: #23734c; font-size: 11px; font-weight: 800; }
        .mm-admin-status i { width: 8px; height: 8px; border-radius: 50%; background: #28a76a; box-shadow: 0 0 0 4px rgba(40,167,106,0.10); }
        .mm-admin-hero { padding: 76px 0; color: #fff; background: radial-gradient(circle at 80% 10%, rgba(255,255,255,0.11), transparent 28%), linear-gradient(135deg, var(--mm-blue-950), var(--mm-blue-800)); }
        .mm-admin-hero-content { display: flex; align-items: center; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
        .mm-admin-eyebrow, .mm-admin-section-label { color: var(--mm-red-500); font-size: 11px; font-weight: 900; letter-spacing: 1.5px; }
        .mm-admin-eyebrow { color: #d8e5f1; }
        .mm-admin-hero h1 { margin: 16px 0 0; font-size: clamp(36px, 6vw, 62px); line-height: 1.03; letter-spacing: -2px; }
        .mm-admin-hero h1 span { color: var(--mm-red-400); }
        .mm-admin-hero p { max-width: 720px; margin: 20px 0 0; color: #cddbe8; line-height: 1.8; font-size: 15px; }
        .mm-admin-owner-card { min-width: 210px; padding: 25px; border: 1px solid rgba(255,255,255,0.14); border-radius: 20px; background: rgba(255,255,255,0.07); box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
        .mm-owner-label { display: block; color: #aebed0; font-size: 9px; font-weight: 900; letter-spacing: 1.3px; }
        .mm-admin-owner-card strong { display: block; margin-top: 8px; font-size: 19px; }
        .mm-admin-owner-card small { display: block; margin-top: 5px; color: #bdccda; font-size: 11px; }
        .mm-admin-stats-section { margin-top: -35px; position: relative; z-index: 2; padding-bottom: 25px; }
        .mm-admin-stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .mm-admin-stat-card { padding: 22px; border: 1px solid var(--mm-border); border-radius: 20px; background: #fff; box-shadow: 0 14px 45px rgba(5,15,29,0.08); }
        .mm-stat-top { display: flex; align-items: center; justify-content: space-between; }
        .mm-stat-icon { width: 40px; height: 40px; display: grid; place-items: center; border-radius: 12px; background: #eef5fb; font-size: 17px; }
        .mm-stat-live { color: #26764f; font-size: 8px; font-weight: 900; letter-spacing: 1px; }
        .mm-admin-stat-card > strong { display: block; margin-top: 20px; color: var(--mm-blue-900); font-size: 34px; line-height: 1; }
        .mm-admin-stat-card h3 { margin: 8px 0 0; color: var(--mm-blue-900); font-size: 14px; }
        .mm-admin-stat-card p { margin: 3px 0 0; color: var(--mm-muted); font-size: 11px; }
        .mm-admin-modules-section { padding: 55px 0 80px; background: var(--mm-surface); }
        .mm-admin-section-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 30px; margin-bottom: 30px; flex-wrap: wrap; }
        .mm-admin-section-heading h2, .mm-panel-heading h2 { margin: 8px 0 0; color: var(--mm-blue-900); font-size: clamp(27px, 4vw, 40px); line-height: 1.15; letter-spacing: -0.7px; }
        .mm-admin-section-heading p { margin: 0; color: var(--mm-muted); font-size: 13px; }
        .mm-admin-module-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .mm-admin-module-card { padding: 25px; border: 1px solid var(--mm-border); border-radius: 20px; background: #fff; box-shadow: 0 7px 28px rgba(5,15,29,0.04); transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .mm-admin-module-card:hover { transform: translateY(-4px); box-shadow: 0 18px 45px rgba(5,15,29,0.09); }
        .mm-module-top { display: flex; align-items: center; justify-content: space-between; }
        .mm-module-icon { width: 47px; height: 47px; display: grid; place-items: center; border-radius: 14px; background: var(--mm-blue-900); color: #fff; font-size: 19px; }
        .mm-module-arrow { color: var(--mm-muted); font-size: 20px; }
        .mm-admin-module-card h3 { margin: 21px 0 3px; color: var(--mm-blue-900); font-size: 20px; }
        .mm-module-hindi { color: var(--mm-red-500); font-size: 11px; font-weight: 800; }
        .mm-admin-module-card p { min-height: 49px; margin: 13px 0 18px; color: var(--mm-muted); font-size: 13px; line-height: 1.7; }
        .mm-module-link { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-top: 14px; border-top: 1px solid var(--mm-border); color: var(--mm-blue-900); font-size: 12px; font-weight: 900; }
        .mm-module-link span { color: var(--mm-red-500); font-size: 17px; }
        .mm-admin-operations-section { padding: 0 0 80px; background: var(--mm-surface); }
        .mm-admin-operations-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .mm-admin-panel { padding: 27px; border: 1px solid var(--mm-border); border-radius: 22px; background: #fff; }
        .mm-panel-heading { display: flex; justify-content: space-between; gap: 20px; margin-bottom: 23px; align-items: center; }
        .mm-panel-heading h2 { font-size: 25px; }
        .mm-activity-count { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 50%; background: #eef5fb; color: var(--mm-blue-900); font-size: 11px; font-weight: 900; }
        .mm-quick-actions { display: grid; gap: 10px; }
        .mm-quick-action { display: flex; align-items: center; gap: 13px; padding: 14px; border: 1px solid var(--mm-border); border-radius: 14px; background: var(--mm-surface); transition: background 0.2s; }
        .mm-quick-action:hover { background: #eef5fb; }
        .mm-quick-action > span { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; background: #fff; }
        .mm-quick-action div { flex: 1; }
        .mm-quick-action strong { display: block; color: var(--mm-blue-900); font-size: 13px; }
        .mm-quick-action small { display: block; margin-top: 3px; color: var(--mm-muted); font-size: 10px; }
        .mm-quick-action b { color: var(--mm-red-500); font-size: 15px; font-weight: 900; }
        .mm-activity-list { display: grid; gap: 15px; }
        .mm-activity-item { display: flex; gap: 12px; align-items: flex-start; padding-bottom: 15px; border-bottom: 1px solid var(--mm-border); }
        .mm-activity-item:last-child { border-bottom: none; padding-bottom: 0; }
        .mm-activity-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--mm-red-500); margin-top: 6px; flex-shrink: 0; }
        .mm-activity-item strong { display: block; color: var(--mm-blue-900); font-size: 13px; }
        .mm-activity-item p { margin: 3px 0 5px; color: var(--mm-muted); font-size: 12px; }
        .mm-activity-item small { color: #8899a8; font-size: 10px; font-weight: 700; text-transform: uppercase; }
        .mm-admin-future-section { padding: 0 0 80px; background: var(--mm-surface); }
        .mm-future-dashboard { display: flex; justify-content: space-between; align-items: center; gap: 30px; padding: 40px; border-radius: 24px; background: linear-gradient(135deg, var(--mm-blue-900), var(--mm-blue-800)); color: #fff; flex-wrap: wrap; }
        .mm-future-dashboard h2 { margin: 8px 0 12px; font-size: clamp(26px, 4vw, 38px); letter-spacing: -0.5px; }
        .mm-future-dashboard p { margin: 0; color: #cbd8e6; line-height: 1.75; font-size: 14px; max-width: 620px; }
        .mm-future-badges { display: flex; gap: 10px; flex-wrap: wrap; max-width: 320px; }
        .mm-future-badges span { padding: 8px 14px; border-radius: 999px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); font-size: 11px; font-weight: 800; }
        .mm-admin-footer { background: #050f1d; color: #aebed0; padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .mm-admin-footer-inner { display: flex; justify-content: space-between; align-items: center; gap: 15px; flex-wrap: wrap; }
        .mm-admin-footer strong { display: block; color: #fff; font-size: 14px; }
        .mm-admin-footer span { font-size: 12px; }

        @media (max-width: 1024px) {
          .mm-admin-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .mm-admin-module-grid { grid-template-columns: repeat(2, 1fr); }
          .mm-admin-operations-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .mm-admin-stats-grid { grid-template-columns: 1fr; }
          .mm-admin-module-grid { grid-template-columns: 1fr; }
          .mm-admin-hero-content { flex-direction: column; align-items: flex-start; }
          .mm-admin-owner-card { width: 100%; }
        }
      `}</style>
    </main>
  );
                }
                
