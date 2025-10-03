import React from "react";
import type { FC } from "react";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

// Vanilla React + TypeScript wireframe

// --- Minimal UI primitives ---------------------------------------------------

type DivProps = React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Card: FC<DivProps> = ({ style, children, ...rest }) => (
  <div
    style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 16,
      boxShadow: "0 1px 3px rgba(0,0,0,.06)",
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

const CardHeader: FC<DivProps> = ({ style, children, ...rest }) => (
  <div style={{ padding: "20px 24px", ...style }} {...rest}>
    {children}
  </div>
);

const CardTitle: FC<DivProps> = ({ style, children, ...rest }) => (
  <h3 style={{ fontSize: 20, fontWeight: 600, margin: 0, ...style }} {...rest}>
    {children}
  </h3>
);

const CardContent: FC<DivProps> = ({ style, children, ...rest }) => (
  <div style={{ padding: "0 24px 24px", ...style }} {...rest}>
    {children}
  </div>
);

const Button: FC<ButtonProps> = ({ style, children, ...rest }) => (
  <button
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      border: "1px solid #e5e7eb",
      borderRadius: 999,
      padding: "6px 12px",
      fontSize: 14,
      background: "#fff",
      cursor: "pointer",
      ...style,
    }}
    {...rest}
  >
    {children}
  </button>
);

// --- Page component ----------------------------------------------------------

type Section = { id: string; title: string };

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  maxWidth: 900,
  margin: "0 auto",
  background: "#fafafa",
  color: "#0a0a0a",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
};

const headerStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 10,
  backdropFilter: "saturate(180%) blur(6px)",
  background: "rgba(255,255,255,0.85)",
  borderBottom: "1px solid #e5e7eb",
};

const navInnerStyle: React.CSSProperties = {
  maxWidth: 928,
  margin: "0 auto",
  padding: "12px 16px",
  display: "flex",
  alignItems: "center",
  gap: 12,
  overflowX: "auto",
};

const mainStyle: React.CSSProperties = {
  maxWidth: 768,
  margin: "0 auto",
  padding: "32px 16px",
  display: "grid",
  gap: 24,
};

const chipStyle: React.CSSProperties = {
  padding: "6px 12px",
  border: "1px solid #e5e7eb",
  borderRadius: 999,
  fontSize: 14,
  textDecoration: "none",
  color: "inherit",
  whiteSpace: "nowrap",
};

const footerStyle: React.CSSProperties = {
  maxWidth: 928,
  margin: "0 auto",
  padding: "32px 16px",
  fontSize: 14,
  color: "#6b7280",
};

export default function ResumeWireframe() {
  const sections: Section[] = [
    { id: "header", title: "Connect" },
    { id: "executive-profile", title: "Executive Profile" },
    { id: "skills", title: "Skills and Technologies" },
    { id: "accomplishments", title: "Major Accomplishments" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
  ];

  const placeholderStyle: React.CSSProperties = {
    fontSize: 16,
    lineHeight: 1.6,
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
  };

  return (
    <div style={containerStyle}>
      {/* Top nav */}
      <header style={headerStyle}>
        <nav style={navInnerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} style={chipStyle}>
                {s.title}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main stacked cards */}
      <main style={mainStyle}>
        {sections.map((s, idx) => (
          <motion.section
            id={s.id}
            key={s.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * idx }}
            aria-label={s.title}
          >
            <Card>
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {s.id === "header" ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                    <img
                      src="/1517759473911.jpg"
                      alt="Profile"
                      onError={(e) => {
                        // fallback to a simple placeholder circle if image not found
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.style.width = "120px";
                        fallback.style.height = "120px";
                        fallback.style.borderRadius = "50%";
                        fallback.style.background = "#e5e7eb";
                        fallback.style.display = "block";
                        e.currentTarget.parentElement?.prepend(fallback);
                      }}
                      style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover" }}
                    />
                    <div style={{ fontSize: 16, fontWeight: 500 }}>Pittsburgh, PA</div>
                    <div style={{ fontSize: 14, color: "#6b7280" }}>jonasgroff@gmail.com</div>
                    <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                      <Button
                        onClick={() =>
                          (window.location.href =
                            "mailto:jonasgroffl@gmail.com?subject=Website Connection&body=Hi%20Jonas%2C%20I%27d%20love%20to%20connect%20about...")
                        }
                        aria-label="Email Me"
                      >
                        Email Me
                      </Button>
                      <Button onClick={() => window.open("https://www.linkedin.com/in/jonasgroff", "_blank")} aria-label="Open LinkedIn">
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                ):s.id === "experience" ? (
                  <div style={placeholderStyle}>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Matthews Marking Systems [Marking and Coding Products] – February 2024 to Present</strong>
                      <div style={{ marginLeft: 20, marginTop: 4 }}>
                        <div>Sr Director of Software Engineering – July 2025 to Present</div>
                        <div>Director of Software Engineering – February 2024 to July 2025</div>
                      </div>
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Kohler [Residential Power Products] – August 2021 to February 2024</strong>
                      <div style={{ marginLeft: 20, marginTop: 4 }}>
                        <div>Software Development Manager</div>
                      </div>
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>GEA Group [Industrial Refrigeration Controls] – April 2012 to August 2021</strong>
                      <div style={{ marginLeft: 20, marginTop: 4 }}>
                        <div>Director – Automation Controls and Tools Development – Sept 2019 to Aug 2021</div>
                        <div>Sr. Software Engineer III - Team Lead – March 2017 to Sept 2019</div>
                        <div>Software Engineer III – May 2015 to March 2017</div>
                        <div>Software Engineer II – April 2012 to May 2015</div>
                      </div>
                    </div>
                    <div style={{ padding: "8px 0", marginTop: 8 }}>
                      <strong>Mauell [Mission Critical Control] – March 2006 to April 2012</strong>
                      <div style={{ marginLeft: 20, marginTop: 4 }}>
                        <div>Lead Design Engineer – July 2010 to April 2012</div>
                        <div>Electrical Engineer – February 2008 to July 2010</div>
                        <div>Application Engineer – March 2006 to February 2008</div>
                      </div>
                    </div>
                  </div>
                ) : s.id === "executive-profile" ? (
                  <p style={{ lineHeight: 1.6, fontSize: 16, margin: 0, marginTop: 8, marginBottom: 8 }}>
                    Transformational software engineering leader with global experience driving innovation, regulatory compliance, and operational excellence. Known for scaling high-performing teams, modernizing SDLC processes, and delivering embedded, cloud, mobile, web and IoT platforms that generate revenue, cut costs and secure market access. Recognized for revitalizing underperforming organizations, accelerating time-to-market, and ensuring compliance with evolving global regulations.
                  </p>
                ) : s.id === "skills" ? (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      columnGap: 24,
                      rowGap: 0,
                      fontSize: 16,
                      lineHeight: 1.6,
                      alignItems: "start",
                      marginTop: 8,
                    }}
                  >
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Cloud and IoT:</strong> Azure Cloud Services (4yr), Azure IoT Edge (2yr), AWS (2yr)
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Embedded & OS:</strong> Linux (12yr), Yocto (6yr), RTOS (5yr), Windows Embedded (10yr)
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Programming Languages:</strong> C++ (7yr), C (7yr), C# (10yr), JAVA (3yr), Javascript (3yr), Python (3yr)
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Frameworks and UI:</strong> Flutter (3yr), Blazor (3yr), Vue (3yr), React (3yr)
                    </div>
                    <div style={{ padding: "8px 0", marginTop: 8, marginBottom: 8 }}>
                      <strong>Databases & Data Services:</strong> SQL (12yr), Cosmos DB (2yr)
                    </div>
                  </div>
                ) : s.id === "accomplishments" ? (
                  <div style={placeholderStyle}>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Sr Director of Software Engineering – Matthews Marking Systems</strong>
                      <ul style={{ marginTop: 4, marginBottom: 8, paddingLeft: 20, listStyleType: "disc" }}>
                        <li>Scaled engineering throughput 289% YOY by modernizing SDLC tooling, codifying agile standards, and cultivating a high-performing global team.</li>
                        <li>Architected platforms across three major product families, integrating embedded, cloud and UI development to deliver cohesive, scalable solutions.</li>
                        <li>Directed division-wide Cyber Resiliency Act (CRA) compliance initiative, conducting comprehensive risk analyses, implementing SBOM pipelines and mitigation plans.</li>
                      </ul>
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Director of Software Engineering – Matthews Marking Systems</strong>
                      <ul style={{ marginTop: 4, marginBottom: 8, paddingLeft: 20, listStyleType: "disc" }}>
                        <li>Turned around a low-performing department, boosting sprint velocity 457% in under 12 months through modernization of CI/CD and automation.</li>
                        <li>Standardized toolchains and development processes across platform teams, driving consistency in code quality and reducing rework-related costs by 50%.</li>
                      </ul>
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <strong>Software Development Manager – Kohler</strong>
                      <ul style={{ marginTop: 4, marginBottom: 8, paddingLeft: 20, listStyleType: "disc" }}>
                        <li>Recruited and scaled a 10+ person high-performing team, delivering multiple apps, websites and a greenfield cloud environment in under one year.</li>
                        <li>Architected a next-generation IoT edge gateway using containerization and digital twin technology for predictive diagnostics and monitoring.</li>
                        <li>Modernized the product technology stack, selecting scalable platforms that expanded functionality without increasing headcount.</li>
                        <li>Re-architected and migrated cloud infrastructure to Azure, cutting cloud operating costs by 40% while improving device reliability.</li>
                      </ul>
                    </div>
                    <div style={{ padding: "8px 0", marginTop: 8, marginBottom: 8 }}>
                      <strong>Automation Controls and Tools Development Director – GEA Group</strong>
                      <ul style={{ marginTop: 4, marginBottom: 8, paddingLeft: 20, listStyleType: "disc" }}>
                        <li>Designed and launched a Linux-based embedded controls platform, reducing deployments costs by 50% across deployments.</li>
                        <li>Delivered greater than 1% EBITDA point in annual divisional savings through Value Analysis / Value Engineering initiatives.</li>
                        <li>Developed a digital transformation strategy, integrating controls, IoT, and cloud platforms into a unified solution adopted globally.</li>
                      </ul>
                    </div>
                  </div>
                ) : s.id === "education" ? (
                  <div style={placeholderStyle}>
                    <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8, marginBottom: 12 }}>
                      <img src="/psulogo.jpg" alt="Penn State Logo" style={{ width: 75, height: 75, marginRight: 16, borderRadius: 8, objectFit: "contain", background: "#f3f4f6" }} />
                      <div>
                        <strong>Master of Engineering in Electrical Engineering</strong><br />
                        Penn State University – May 2017
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", padding: "8px 0", marginTop: 8, marginBottom: 8 }}>
                      <img src="/etownCollegelogo.png" alt="Elizabethtown College Logo" style={{ width: 75, height: 75, marginRight: 16, borderRadius: 8, objectFit: "contain", background: "#f3f4f6" }} />
                      <div>
                        <strong>Bachelor of Science in Computer Engineering</strong><br />
                        Elizabethtown College – May 2005
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={placeholderStyle}>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <div style={{ height: 12, width: "50%", background: "#e5e7eb", borderRadius: 6 }} />
                    </div>
                    <div style={{ borderBottom: "1px solid #e5e7eb", padding: "8px 0", marginTop: 8 }}>
                      <div style={{ height: 12, width: "66%", background: "#e5e7eb", borderRadius: 6 }} />
                    </div>
                    <div style={{ padding: "8px 0", marginTop: 8, marginBottom: 8 }}>
                      <div style={{ height: 12, width: "83%", background: "#e5e7eb", borderRadius: 6 }} />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.section>
        ))}

        {/* Back to top */}
        <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 4 }}>
          <Button onClick={() => document.getElementById("header")?.scrollIntoView({ behavior: "smooth" })} aria-label="Back to top">
            <ArrowUp size={16} style={{ marginRight: 6 }} />
            <span>Top</span>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p style={{ margin: 0 }}>Jonas Groff</p>
        <ul style={{ marginTop: 8, paddingLeft: 18 }}>
          <li>Email: jonasgroff@gmail.com</li>
        </ul>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Button
            onClick={() =>
              (window.location.href =
                "mailto:jonasgroffl@gmail.com?subject=Website Connection&body=Hi%20Jonas%2C%20I%27d%20love%20to%20connect%20about...")
            }
            aria-label="Email Me"
          >
            Email Me
          </Button>
          <Button onClick={() => window.open("https://www.linkedin.com/in/jonasgroff", "_blank")} aria-label="Open LinkedIn">
            LinkedIn
          </Button>
        </div>
      </footer>
    </div>
  );
}
