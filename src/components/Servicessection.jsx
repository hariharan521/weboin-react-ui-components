import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    description:
      "AI-powered, data-driven campaigns that target high-intent users to boost your brand's conversion and engagement across every channel.",
  },
  {
    id: "02",
    title: "Quality Assurance",
    description:
      "Rigorous testing processes to ensure your digital products meet the highest standards of quality and performance.",
  },
  {
    id: "03",
    title: "Process Automation",
    description:
      "Streamline your business operations with intelligent automation workflows that save time and reduce errors.",
  },
  {
    id: "04",
    title: "Search Engine Optimisation (SEO)",
    description:
      "Search-focused strategies and technical optimisation to improve discoverability and long-term organic growth.",
  },
  {
    id: "05",
    title: "Content Management",
    description:
      "Efficient content strategies and management systems that keep your brand voice consistent across all channels.",
  },
  {
    id: "06",
    title: "E-commerce Integrations",
    description:
      "Seamless e-commerce solutions that connect your store with payment gateways, inventory, and logistics platforms.",
  },
  {
    id: "07",
    title: "Front-End Web & Mobile App Development",
    description:
      "Beautiful, responsive interfaces built with modern frameworks for web and mobile platforms.",
  },
  {
    id: "08",
    title: "Content Automation",
    description:
      "Automate your content pipeline with AI-powered tools that generate, schedule and distribute content at scale.",
  },
  {
    id: "09",
    title: "Digital Solution Development",
    description:
      "End-to-end digital solutions tailored to your business needs, from ideation through to deployment and support.",
  },
];

const iconMap = {
  "01": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#FFF3E0" />
      <rect x="10" y="18" width="28" height="20" rx="3" fill="#FF9800" />
      <rect x="14" y="22" width="20" height="3" rx="1.5" fill="#fff" />
      <rect x="14" y="27" width="14" height="3" rx="1.5" fill="#fff" />
      <circle cx="46" cy="22" r="10" fill="#1565C0" />
      <text
        x="46"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontWeight="bold"
      >
        SEO
      </text>
      <circle cx="54" cy="30" r="5" fill="#FF9800" />
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#E8F5E9" />
      <path
        d="M32 12l18 8v12c0 10-8 19-18 22C22 51 14 42 14 32V20l18-8z"
        fill="#43A047"
        opacity=".3"
      />
      <path
        d="M32 16l14 6.5v10c0 8-6 15-14 17.5C18 47.5 12 40.5 12 32.5v-10L32 16z"
        fill="#43A047"
      />
      <path
        d="M24 32l5 5 11-11"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#E3F2FD" />
      <circle cx="32" cy="32" r="14" fill="#1976D2" opacity=".2" />
      <circle cx="32" cy="32" r="8" fill="#1976D2" />
      <path
        d="M32 18v4M32 42v4M18 32h4M42 32h4"
        stroke="#1976D2"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#FFF3E0" />
      <rect x="10" y="18" width="28" height="20" rx="3" fill="#FF9800" />
      <rect x="14" y="22" width="20" height="3" rx="1.5" fill="#fff" />
      <rect x="14" y="27" width="14" height="3" rx="1.5" fill="#fff" />
      <circle cx="46" cy="22" r="10" fill="#1565C0" />
      <text
        x="46"
        y="26"
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontWeight="bold"
      >
        SEO
      </text>
      <circle cx="54" cy="30" r="5" fill="#FF9800" />
    </svg>
  ),
  "05": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#F3E5F5" />
      <rect
        x="14"
        y="14"
        width="36"
        height="36"
        rx="4"
        fill="#9C27B0"
        opacity=".2"
      />
      <rect x="18" y="20" width="28" height="3" rx="1.5" fill="#9C27B0" />
      <rect x="18" y="27" width="20" height="3" rx="1.5" fill="#9C27B0" />
      <rect x="18" y="34" width="24" height="3" rx="1.5" fill="#9C27B0" />
      <rect x="18" y="41" width="16" height="3" rx="1.5" fill="#9C27B0" />
    </svg>
  ),
  "06": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#E8F5E9" />
      <path d="M10 20h36l-4 18H18L10 20z" fill="#43A047" opacity=".3" />
      <path
        d="M8 14h6l4 20h28"
        stroke="#43A047"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26" cy="46" r="3" fill="#43A047" />
      <circle cx="40" cy="46" r="3" fill="#43A047" />
    </svg>
  ),
  "07": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#E3F2FD" />
      <rect
        x="10"
        y="16"
        width="44"
        height="28"
        rx="4"
        fill="#1976D2"
        opacity=".2"
      />
      <rect
        x="14"
        y="20"
        width="36"
        height="20"
        rx="2"
        fill="#1976D2"
        opacity=".5"
      />
      <path
        d="M24 30l-5 0M31 24l4 6-4 6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="24" y="44" width="16" height="4" rx="2" fill="#1976D2" />
    </svg>
  ),
  "08": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#FFF8E1" />
      <circle cx="32" cy="32" r="16" fill="#FFC107" opacity=".3" />
      <path
        d="M26 32h12M32 26l6 6-6 6"
        stroke="#F59E0B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "09": (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none">
      <rect width="64" height="64" rx="14" fill="#FCE4EC" />
      <rect
        x="14"
        y="14"
        width="36"
        height="36"
        rx="8"
        fill="#E91E63"
        opacity=".2"
      />
      <path
        d="M22 32h20M32 22v20"
        stroke="#E91E63"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const odd = services.filter((_, i) => i % 2 === 0);
const even = services.filter((_, i) => i % 2 !== 0);
const detailList = services.slice(1);

export default function ServicesSection() {
  const [active, setActive] = useState("01");
  const [detailIdx, setDetailIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const current = detailList[detailIdx];
  const prevSvc =
    detailList[(detailIdx - 1 + detailList.length) % detailList.length];
  const nextSvc = detailList[(detailIdx + 1) % detailList.length];

  function goTo(id) {
    setActive(id);
    const idx = detailList.findIndex((s) => s.id === id);
    if (idx >= 0) {
      setDetailIdx(idx);
      setAnimKey((k) => k + 1);
    }
  }
  function goPrev() {
    setDetailIdx((i) => (i - 1 + detailList.length) % detailList.length);
    setAnimKey((k) => k + 1);
  }
  function goNext() {
    setDetailIdx((i) => (i + 1) % detailList.length);
    setAnimKey((k) => k + 1);
  }

  return (
    <section
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        padding: "60px 16px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');
        .svc-section * { box-sizing: border-box; }
        @keyframes svc-fadeup { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes svc-slidein { from { opacity:0; transform:translateX(18px); } to { opacity:1; transform:translateX(0); } }
        .svc-fadeup { animation: svc-fadeup 0.5s cubic-bezier(.4,0,.2,1) both; }
        .svc-slidein { animation: svc-slidein 0.38s cubic-bezier(.4,0,.2,1) both; }
        .svc-row { cursor:pointer; border-radius:10px; transition:all .25s ease; }
        .svc-nav-btn { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,0.25); color:#fff; background:transparent; cursor:pointer; transition:background .18s; flex-shrink:0; }
        .svc-nav-btn:hover { background:rgba(255,255,255,0.15); }

        /* ── Desktop layout ── */
        .svc-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1fr;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(30,42,110,0.09);
          background: #fff;
          box-shadow: 0 4px 32px rgba(0,0,0,0.10);
          min-height: 680px;
        }
        .svc-left { padding: 40px 32px; display:flex; flex-direction:column; justify-content:space-between; }
        .svc-middle { padding: 40px 28px; display:flex; gap:20px; border-left:1px solid #f0f0f5; border-right:1px solid #f0f0f5; }
        .svc-right { background:#1e2a6e; padding:40px 28px; display:flex; flex-direction:column; justify-content:space-between; }
        .svc-col { flex:1; display:flex; flex-direction:column; gap:8px; }

        /* ── Mobile layout ── */
        @media (max-width: 768px) {
          .svc-header h2 { font-size: 26px !important; }
          .svc-header p { font-size: 14px !important; }
          .svc-main-grid {
            grid-template-columns: 1fr;
            min-height: unset;
            border-radius: 20px;
          }
          .svc-left { padding: 24px 20px; }
          .svc-left h3 { font-size: 36px !important; margin: 20px 0 16px !important; }
          .svc-middle { padding: 20px 16px; border-left:none; border-right:none; border-top:1px solid #f0f0f5; border-bottom:1px solid #f0f0f5; }
          .svc-right { padding: 24px 20px; border-radius: 0 0 20px 20px; }
          .svc-row { padding: 8px 10px !important; height: auto !important; }
          .svc-viewmore { width: 100% !important; }
        }

        @media (max-width: 480px) {
          .svc-col { gap: 6px; }
        }
      `}</style>

      <div className="svc-section" style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Header */}
        <div
          className="svc-header svc-fadeup"
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span
            style={{
              display: "inline-block",
              border: "1.5px solid rgba(0,0,0,0.8)",
              borderRadius: 999,
              padding: "4px 24px",
              fontSize: 15,
              color: "rgba(0,0,0,0.75)",
              marginBottom: 16,
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 500,
            }}
          >
            Services
          </span>
          <h2
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: 40,
              fontWeight: 600,
              color: "#1a1a2e",
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            We provide the best service for you
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#5c5b5b",
              lineHeight: 1.5,
              maxWidth: 560,
              margin: "0 auto",
              fontFamily: "'Poppins',sans-serif",
            }}
          >
            From cost-effective digital marketing strategies to convenient
            shopping experiences with an E-commerce website.
          </p>
        </div>

        {/* Main grid */}
        <div className="svc-main-grid">
          {/* LEFT */}
          <div className="svc-left">
            <div>
              <p
                style={{
                  fontSize: 13,
                  color: "#496b8d",
                  lineHeight: 1.4,
                  marginBottom: 12,
                  fontWeight: 500,
                  fontFamily: "'Poppins',sans-serif",
                }}
              >
                Production and
                <br />
                Technology
              </p>
              <h3
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 56,
                  fontWeight: 500,
                  color: "#0f1117",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  margin: "32px 0 24px",
                }}
              >
                Services
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#496b8d",
                  lineHeight: 1.6,
                  fontFamily: "'Poppins',sans-serif",
                  marginBottom: 28,
                }}
              >
                We provide multiple services from digital production to
                technology services. Based on understanding your business and
                goals, we tailor the right process for you.
              </p>
              <button
                className="svc-viewmore"
                style={{
                  background: "#303c6b",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 28px",
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                View More
              </button>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="svc-middle">
            {/* Odd column */}
            <div className="svc-col">
              {odd.map((s) => (
                <div
                  key={s.id}
                  className="svc-row"
                  onClick={() => goTo(s.id)}
                  style={{
                    background: active === s.id ? "#303c6b" : "transparent",
                    padding: "10px 12px",
                    height: 90,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Poppins',sans-serif",
                      color: active === s.id ? "#fff" : "#496b8d",
                      marginBottom: 4,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.id}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Poppins',sans-serif",
                      color: active === s.id ? "#fff" : "#496b8d",
                      fontWeight: active === s.id ? 600 : 400,
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
            {/* Even column */}
            <div className="svc-col">
              {even.map((s) => (
                <div
                  key={s.id}
                  className="svc-row"
                  onClick={() => goTo(s.id)}
                  style={{
                    background: active === s.id ? "#303c6b" : "transparent",
                    padding: "10px 12px",
                    height: 90,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Poppins',sans-serif",
                      color: active === s.id ? "#fff" : "#496b8d",
                      marginBottom: 4,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.id}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      fontFamily: "'Poppins',sans-serif",
                      color: active === s.id ? "#fff" : "#496b8d",
                      fontWeight: active === s.id ? 600 : 400,
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — detail card */}
          <div className="svc-right">
            <div key={animKey} className="svc-slidein" style={{ flex: 1 }}>
              <div style={{ marginBottom: 32 }}>{iconMap[current.id]}</div>
              <h4
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.3,
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                {current.title}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {current.description}
              </p>
            </div>

            {/* Nav */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 32,
                gap: 8,
              }}
            >
              <button className="svc-nav-btn" onClick={goPrev}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'DM Sans',sans-serif",
                    maxWidth: 70,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {prevSvc.title.split(" ").slice(0, 2).join(" ")}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Poppins',sans-serif",
                    maxWidth: 70,
                    textAlign: "center",
                    lineHeight: 1.3,
                  }}
                >
                  {nextSvc.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
              <button className="svc-nav-btn" onClick={goNext}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
