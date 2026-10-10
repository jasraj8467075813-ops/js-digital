
import Link from "next/link";

export default function BusinessTemplate() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 8%",
          borderBottom: "1px solid #e5e7eb",
          background: "#ffffff",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#172033",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          NORTH / STUDIO
        </Link>

        <Link
          href="/templates"
          style={{ color: "#475569", textDecoration: "none" }}
        >
          ← All templates
        </Link>
      </nav>

      <section
        style={{
          padding: "100px 8%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <div>
          <p
            style={{
              color: "#2563eb",
              letterSpacing: "3px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            STRATEGY · DESIGN · DEVELOPMENT
          </p>

          <h1
            style={{
              fontSize: "clamp(44px, 6vw, 76px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              margin: "24px 0",
            }}
          >
            Good ideas.
            <br />
            Built better.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#64748b",
              maxWidth: "480px",
            }}
          >
            We help businesses build a strong online presence with thoughtful
            design, modern websites, and digital experiences made for people.
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: "28px",
              padding: "16px 25px",
              borderRadius: "50px",
              background: "#2563eb",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Start a project ↗
          </a>
        </div>

        <div
          style={{
            minHeight: "360px",
            borderRadius: "28px",
            padding: "24px",
            background:
              "linear-gradient(135deg, #dbeafe, #eff6ff 55%, #bfdbfe)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              padding: "32px",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 25px 60px rgba(37,99,235,0.13)",
            }}
          >
            <div style={{ color: "#2563eb", fontWeight: "bold" }}>
              NORTH / STUDIO
            </div>

            <div
              style={{
                height: "150px",
                margin: "25px 0",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, #2563eb, #93c5fd)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "64px",
              }}
            >
              N
            </div>

            <h2 style={{ fontSize: "26px", margin: "0 0 10px" }}>
              Think beyond.
            </h2>

            <p style={{ color: "#64748b", lineHeight: 1.6 }}>
              A fresh direction for your business.
            </p>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          background: "#ffffff",
          padding: "80px 8%",
        }}
      >
        <p style={{ color: "#2563eb", fontWeight: "bold" }}>
          WHAT WE DO
        </p>

        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
          Built around your goals.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {[
            {
              title: "Web Design",
              text: "Clear, attractive designs that communicate your brand.",
            },
            {
              title: "Development",
              text: "Responsive websites that work across devices.",
            },
            {
              title: "Digital Growth",
              text: "A stronger foundation for your online presence.",
            },
          ].map((service) => (
            <article
              key={service.title}
              style={{
                padding: "28px",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
              }}
            >
              <h3 style={{ fontSize: "22px" }}>{service.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.8 }}>
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          margin: "70px 8%",
          padding: "60px 30px",
          textAlign: "center",
          borderRadius: "28px",
          background: "#172033",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
          Ready to build something better?
        </h2>

        <p style={{ color: "#cbd5e1", lineHeight: 1.8 }}>
          Tell us about your business and your website goals.
        </p>

        <a
          href="https://wa.me/918467075813?text=Hi%20JS%20Digital%2C%20I%20want%20to%20discuss%20a%20website."
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "15px 24px",
            borderRadius: "50px",
            background: "#2563eb",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          Contact on WhatsApp ↗
        </a>
      </section>

      <footer
        style={{
          padding: "28px 8%",
          borderTop: "1px solid #e2e8f0",
          color: "#64748b",
        }}
      >
        © 2026 North / Studio · Demo website
      </footer>
    </main>
  );
}
