import Link from "next/link";

const cardFeatures = [
  {
    number: "01",
    title: "Unique Worker ID",
    hindi: "यूनिक पहचान संख्या",
    description:
      "हर approved worker के लिए अलग और traceable MUKESH MANPOWER identification number.",
  },
  {
    number: "02",
    title: "Worker Verification",
    hindi: "वर्कर वेरिफिकेशन",
    description:
      "Approved worker profile और identity information को secure verification workflow से जोड़ा जाएगा.",
  },
  {
    number: "03",
    title: "Digital ID Card",
    hindi: "डिजिटल पहचान पत्र",
    description:
      "Approval के बाद professional digital ID card तैयार करने की व्यवस्था.",
  },
  {
    number: "04",
    title: "Owner Approval",
    hindi: "मालिक की मंजूरी",
    description:
      "Management approval के बिना worker ID generate नहीं किया जाएगा.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Application",
    hindi: "आवेदन",
    description: "Candidate job application submit करता है.",
  },
  {
    number: "02",
    title: "Verification",
    hindi: "सत्यापन",
    description: "Management candidate की information verify करती है.",
  },
  {
    number: "03",
    title: "Approval",
    hindi: "मंजूरी",
    description: "Owner approval के बाद worker को approved status मिलता है.",
  },
  {
    number: "04",
    title: "ID Generation",
    hindi: "आईडी निर्माण",
    description: "Approved worker के लिए unique MUKESH MANPOWER ID generate होती है.",
  },
];

export default function IdCardsPage() {
  return (
    <main>
      {/* Header */}
      <header className="mm-id-header">
        <div className="mm-container mm-id-header-inner">
          <Link href="/" className="mm-brand">
            <span className="mm-brand-mark">MM</span>

            <span className="mm-brand-name">
              MUKESH{" "}
              <span className="mm-brand-red">MANPOWER</span>
            </span>
          </Link>

          <Link href="/" className="mm-button mm-button-outline">
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mm-id-hero">
        <div className="mm-container mm-id-hero-content">
          <span className="mm-id-eyebrow">DIGITAL IDENTITY SYSTEM</span>

          <h1>
            Professional Worker
            <br />
            <span>Identity System</span>
          </h1>

          <p>
            Approved workers के लिए unique ID, verification और digital
            identification management की professional foundation.
          </p>

          <div className="mm-id-hero-actions">
            <a href="#id-preview" className="mm-button mm-button-primary">
              View ID Preview
            </a>

            <a
              href="https://wa.me/916379403821?text=Hi,%20I%20want%20worker%20ID%20card%20information"
              target="_blank"
              rel="noreferrer"
              className="mm-button mm-button-light"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ID Preview */}
      <section id="id-preview" className="mm-id-preview-section">
        <div className="mm-container mm-id-preview-grid">
          <div className="mm-worker-card">
            <div className="mm-worker-card-top">
              <div>
                <div className="mm-worker-brand-small">MUKESH</div>
                <div className="mm-worker-brand-main">MANPOWER</div>
              </div>

              <span className="mm-verified-pill">✓ VERIFIED</span>
            </div>

            <div className="mm-worker-profile">
              <div className="mm-worker-photo">
                <span>👤</span>
              </div>

              <div className="mm-worker-info">
                <span>WORKER NAME</span>
                <strong>APPROVED WORKER</strong>
                <small>Position: Worker</small>
              </div>
            </div>

            <div className="mm-worker-details">
              <div>
                <span>WORKER ID</span>
                <strong>MM-WRK-XXXX</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>APPROVED</strong>
              </div>
            </div>

            <div className="mm-worker-footer">
              <span>MUKESH MANPOWER</span>
              <span>OFFICIAL ID</span>
            </div>
          </div>

          <div className="mm-id-intro">
            <span className="mm-section-eyebrow">WORKER IDENTITY</span>

            <h2>
              हर approved worker की
              <br />
              <span>clear digital identity.</span>
            </h2>

            <p>
              हमारा लक्ष्य ऐसा controlled digital ID workflow बनाना है जिसमें
              applicant approval के बाद ही worker ID generate हो और management
              के पास पूरे process का control रहे।
            </p>

            <div className="mm-id-status-row">
              <span className="mm-status-success">✓ Approval Required</span>
              <span className="mm-status-info">Secure Workflow</span>
              <span className="mm-status-info">Traceable ID</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mm-id-features-section">
        <div className="mm-container">
          <div className="mm-section-heading">
            <span className="mm-section-eyebrow">CORE FEATURES</span>

            <h2>Built for controlled verification</h2>

            <p>
              MUKESH MANPOWER के future worker management system के लिए
              professional identity foundation.
            </p>
          </div>

          <div className="mm-feature-grid">
            {cardFeatures.map((feature) => (
              <article key={feature.number} className="mm-id-feature-card">
                <div className="mm-feature-number">{feature.number}</div>

                <h3>{feature.title}</h3>

                <span>{feature.hindi}</span>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mm-id-workflow-section">
        <div className="mm-container">
          <div className="mm-workflow-box">
            <div className="mm-section-heading">
              <span className="mm-section-eyebrow">APPROVAL WORKFLOW</span>

              <h2>Application → Verification → Approval → ID</h2>

              <p>
                ID generation को management approval के साथ controlled रखा
                जाएगा।
              </p>
            </div>

            <div className="mm-workflow-grid">
              {workflow.map((step) => (
                <div key={step.number} className="mm-workflow-step">
                  <div className="mm-workflow-number">{step.number}</div>

                  <h3>{step.title}</h3>

                  <span>{step.hindi}</span>

                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future System */}
      <section className="mm-id-future-section">
        <div className="mm-container">
          <div className="mm-future-box">
            <div>
              <span className="mm-section-eyebrow">
                FUTURE MANAGEMENT SYSTEM
              </span>

              <h2>Ready for real worker data.</h2>

              <p>
                आगे चलकर यही system worker database, approval controls,
                digital ID generation, verification और management dashboard
                से connect किया जा सकता है।
              </p>
            </div>

            <Link href="/admin" className="mm-button mm-button-primary">
              Open Management
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mm-id-contact-section">
        <div className="mm-container">
          <div className="mm-contact-box">
            <span className="mm-id-eyebrow">MUKESH MANPOWER</span>

            <h2>Worker ID verification support</h2>

            <p>
              Worker ID और verification से संबंधित जानकारी के लिए हमारी team
              से संपर्क करें।
            </p>

            <div className="mm-id-contact-actions">
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
                className="mm-button mm-button-light"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mm-id-footer">
        <div className="mm-container mm-id-footer-inner">
          <strong>MUKESH MANPOWER</strong>

          <span>Professional Workforce Solutions</span>
        </div>
      </footer>

      {/* Page-specific responsive styling */}
      <style>{`
        .mm-id-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--mm-border);
        }

        .mm-id-header-inner {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .mm-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 900;
        }

        .mm-brand-mark {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--mm-blue-900);
          color: #fff;
          font-size: 13px;
        }

        .mm-brand-name {
          font-size: 17px;
          color: var(--mm-blue-900);
        }

        .mm-brand-red {
          color: var(--mm-red-500);
        }

        .mm-id-hero {
          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(255,255,255,0.12),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              var(--mm-blue-950),
              var(--mm-blue-800)
            );
          color: #fff;
          padding: 92px 0;
        }

        .mm-id-hero-content {
          max-width: 900px;
          text-align: center;
        }

        .mm-id-eyebrow,
        .mm-section-eyebrow {
          display: inline-block;
          color: var(--mm-red-500);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .mm-id-hero .mm-id-eyebrow {
          color: #dce8f5;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
        }

        .mm-id-hero h1 {
          margin: 22px 0 0;
          font-size: clamp(38px, 7vw, 68px);
          line-height: 1.03;
          letter-spacing: -2.5px;
        }

        .mm-id-hero h1 span {
          color: var(--mm-red-400);
        }

        .mm-id-hero p {
          max-width: 720px;
          margin: 22px auto 0;
          color: #d3e0ed;
          line-height: 1.8;
          font-size: 16px;
        }

        .mm-id-hero-actions,
        .mm-id-contact-actions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .mm-button-light {
          color: #fff;
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.22);
        }

        .mm-id-preview-section {
          padding: 80px 0;
          background: var(--mm-surface);
        }

        .mm-id-preview-grid {
          display: grid;
          grid-template-columns: minmax(0, 390px) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
          justify-content: center;
        }

        .mm-worker-card {
          width: 100%;
          padding: 23px;
          border-radius: 24px;
          color: #fff;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255,255,255,0.10),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              var(--mm-blue-950),
              var(--mm-blue-800)
            );
          box-shadow: 0 25px 70px rgba(5,15,29,0.24);
        }

        .mm-worker-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 17px;
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }

        .mm-worker-brand-small {
          color: #b9c9d9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .mm-worker-brand-main {
          color: var(--mm-red-400);
          font-size: 18px;
          font-weight: 900;
        }

        .mm-verified-pill {
          padding: 6px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          font-size: 9px;
          font-weight: 900;
        }

        .mm-worker-profile {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 25px 0;
        }

        .mm-worker-photo {
          width: 78px;
          height: 94px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          font-size: 27px;
        }

        .mm-worker-info span,
        .mm-worker-details span {
          display: block;
          color: #aebed0;
          font-size: 9px;
          letter-spacing: 0.6px;
        }

        .mm-worker-info strong {
          display: block;
          margin-top: 4px;
          font-size: 18px;
          line-height: 1.2;
        }

        .mm-worker-info small {
          display: block;
          margin-top: 9px;
          color: #cbd8e6;
          font-size: 11px;
        }

        .mm-worker-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.14);
        }

        .mm-worker-details strong {
          display: block;
          margin-top: 4px;
          font-size: 13px;
        }

        .mm-worker-footer {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 20px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.10);
          color: #aebed0;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .mm-id-intro h2 {
          margin: 10px 0 18px;
          color: var(--mm-blue-900);
          font-size: clamp(30px, 5vw, 48px);
          line-height: 1.12;
          letter-spacing: -1.3px;
        }

        .mm-id-intro h2 span {
          color: var(--mm-red-500);
        }

        .mm-id-intro p {
          max-width: 650px;
          margin: 0;
          color: var(--mm-muted);
          line-height: 1.85;
          font-size: 15px;
        }

        .mm-id-status-row {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .mm-status-success,
        .mm-status-info {
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
        }

        .mm-status-success {
          color: #126b46;
          background: #e9f8f0;
          border: 1px solid #bce8d1;
        }

        .mm-status-info {
          color: var(--mm-blue-900);
          background: #eef5fb;
          border: 1px solid #d5e4f1;
        }

        .mm-id-features-section,
        .mm-id-workflow-section {
          padding: 80px 0;
        }

        .mm-id-features-section {
          background: #fff;
        }

        .mm-section-heading {
          max-width: 760px;
          margin-bottom: 35px;
        }

        .mm-section-heading h2 {
          margin: 9px 0 12px;
          color: var(--mm-blue-900);
          font-size: clamp(29px, 5vw, 44px);
          line-height: 1.15;
          letter-spacing: -1px;
        }

        .mm-section-heading p {
          margin: 0;
          color: var(--mm-muted);
          line-height: 1.8;
          font-size: 14px;
        }

        .mm-feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .mm-id-feature-card {
          padding: 28px;
          border: 1px solid var(--mm-border);
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 8px 30px rgba(5,15,29,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .mm-id-feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 45px rgba(5,15,29,0.09);
        }

        .mm-feature-number,
        .mm-workflow-number {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--mm-blue-900);
          color: #fff;
          font-size: 12px;
          font-weight: 900;
        }

        .mm-id-feature-card h3 {
          margin: 19px 0 4px;
          color: var(--mm-blue-900);
          font-size: 21px;
        }

        .mm-id-feature-card > span,
        .mm-workflow-step > span {
          color: var(--mm-red-500);
          font-size: 12px;
          font-weight: 800;
        }

        .mm-id-feature-card p,
        .mm-workflow-step p {
          margin: 13px 0 0;
          color: var(--mm-muted);
          line-height: 1.75;
          font-size: 14px;
        }

        .mm-id-workflow-section {
          background: var(--mm-surface);
        }

        .mm-workflow-box {
          padding: 35px;
          border: 1px solid var(--mm-border);
          border-radius: 24px;
          background: #fff;
        }

        .mm-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .mm-workflow-step {
          padding: 21px;
          border-radius: 17px;
          background: var(--mm-surface);
          border: 1px solid var(--mm-border);
        }

        .mm-workflow-step h3 {
          margin: 15px 0 3px;
          color: var(--mm-blue-900);
          font-size: 18px;
        }

        .mm-id-future-section {
          padding: 0 0 80px;
          background: var(--mm-surface);
        }

        .mm-future-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 38px;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            var(--mm-blue-900),
            var(--mm-blue-800)
          );
          color: #fff;
        }

        .mm-future-box .mm-section-eyebrow {
          color: var(--mm-red-400);
        }

        .mm-future-box h2 {
          margin: 9px 0 10px;
          font-size: clamp(26px, 4vw, 38px);
        }

        .mm-future-box p {
          max-width: 680px;
          margin: 0;
          color: #cbd8e6;
          line-height: 1.75;
          font-size: 14px;
        }

        .mm-id-contact-section {
          padding: 0 0 80px;
          background: var(--mm-surface);
        }

        .mm-contact-box {
          padding: 55px 25px;
          border-radius: 25px;
          text-align
