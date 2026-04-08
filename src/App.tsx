import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const team = [
    { name: "Adam Hrnčiar", role: "Software & Electronics", desc: "System architecture and dual-processor integration lead." },
    { name: "Matej Matúš", role: "Mechanical Design", desc: "CAD modeling and 3D printing of the active-descent chassis." },
    { name: "Matej Bulík", role: "Electronics", desc: "Power systems and flight control firmware specialist." },
    { name: "Peter Takáč", role: "Software", desc: "Ground station development and telemetry visualization." },
    { name: "Jakub Panák", role: "Documentation & Marketing", desc: "Public relations, outreach, and mission branding." }
  ];

  const specs = [
    { label: "Max Height", value: "115 mm" },
    { label: "Max Diameter", value: "66 mm" },
    { label: "Target Apogee", value: "150 m" },
    { label: "Descent Speed", value: "5 – 12 m/s" },
    { label: "Detection Range", value: "> 30 m" },
    { label: "Telemetry Rate", value: "≥ 1 Hz" }
  ];

  return (
    <div className="app">
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="./logo.jpg" alt="HYPERION Logo" style={{ height: '40px', borderRadius: '4px' }} />
            <a href="#" className="logo">HYPERION</a>
          </div>

          <nav className={menuOpen ? 'open' : ''}>
            <ul>
              <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
              <li><a href="#data" onClick={closeMenu}>Data</a></li>
              <li><a href="#tech" onClick={closeMenu}>Stack</a></li>
              <li><a href="#team" onClick={closeMenu}>Team</a></li>
              <li><a href="#documents" onClick={closeMenu}>CDR</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>HYPERION</h1>
            <p className="subtitle">Piaristické gymnázium Jozefa Braneckého, Trenčín</p>
            <p>Pushing the limits of <strong>Autonomous Precision Landing</strong>. No parachute. Just code and physics.</p>
            <div style={{ marginTop: '2rem' }}>
              <a href="#mission" className="btn">Mission Details</a>
            </div>
          </div>
        </section>

        <section id="documents" className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <h2 style={{ margin: 0 }}>Critical Design Review</h2>
            <a
              href="./TN_HYPERION_CDR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ marginTop: 0 }}
              download
            >
              Download PDF
            </a>
          </div>
          <div className="pdf-viewer-wrapper">
            <iframe
              src="./TN_HYPERION_CDR.pdf"
              title="HYPERION Critical Design Review"
              className="pdf-viewer"
            />
          </div>
        </section>

        <section id="mission" className="container">
          <h2>Mission Objectives</h2>
          <div className="grid">
            <div className="card">
              <h3>Primary</h3>
              <p>Measure atmospheric temperature and pressure during descent. Log data at 5 Hz to SD card and transmit real-time telemetry via <strong>MAVLink</strong>.</p>
            </div>
            <div className="card">
              <h3>Secondary</h3>
              <p>Autonomous landing on a 3×3 m <strong>ArUco marker</strong>. Real-time vision processing on Raspberry Pi Zero 2W guiding the MambaF405 MK2.</p>
            </div>
            <div className="card">
              <h3>Failsafe</h3>
              <p>Passive aerodynamic drag from extended motor arms and 3D-printed <strong>crumple zones</strong> for impact energy absorption.</p>
            </div>
          </div>
        </section>

        <section id="data" className="container">
          <div style={{ background: 'rgba(251, 109, 0, 0.03)', padding: '3rem 2rem', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Mission Parameters</h2>
            <div
              className="grid specs-grid"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', marginTop: '2rem' }}
            >
              {specs.map(spec => (
                <div key={spec.label} style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)', textTransform: 'uppercase', letterSpacing: '1px' }}>{spec.label}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--orange)', marginTop: '0.3rem' }}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tech" className="container">
          <h2>Flight Stack</h2>
          <div className="grid">
            <div className="card">
              <h3>Avionics</h3>
              <div className="tech-spec"><span className="tech-label">Companion</span><span>RPi Zero 2W</span></div>
              <div className="tech-spec"><span className="tech-label">Flight Controller</span><span>MambaF405 MK2</span></div>
              <div className="tech-spec"><span className="tech-label">Firmware</span><span>ArduPilot</span></div>
            </div>
            <div className="card">
              <h3>Propulsion</h3>
              <div className="tech-spec"><span className="tech-label">Motors</span><span>RCinpower 1202.5</span></div>
              <div className="tech-spec"><span className="tech-label">Power</span><span>GNB 1100 mAh 2S HV</span></div>
              <div className="tech-spec"><span className="tech-label">ESCs</span><span>Racestar 35A</span></div>
            </div>
            <div className="card">
              <h3>Comms</h3>
              <div className="tech-spec"><span className="tech-label">Protocol</span><span>ELRS 2.4 GHz</span></div>
              <div className="tech-spec"><span className="tech-label">Telemetry</span><span>CRSF / MAVLink</span></div>
              <div className="tech-spec"><span className="tech-label">Range</span><span>Long Range (TCXO)</span></div>
            </div>
          </div>
        </section>

        <section id="testing" className="container">
          <h2>Verification &amp; Testing</h2>
          <div className="card" style={{ borderLeft: '4px solid var(--orange)', background: 'rgba(251, 109, 0, 0.05)' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--orange)', marginBottom: '1rem' }}>Engineering Note: Testing Progress</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
              Testing is now underway. Our BME280 primary mission sensor has been verified on April 7, 2026. Full integration testing with flight controller, ELRS telemetry, and propulsion systems is scheduled for April 8–9.
            </p>
          </div>
 
          <div className="grid" style={{ marginTop: '2rem' }}>
            {/* ✅ PASSED */}
            <div className="card" style={{ borderTop: '3px solid #00ff88' }}>
              <h3>BME280 Sensor Test</h3>
              <p style={{ fontSize: '0.85rem' }}>Primary mission sensor verified at 5 Hz logging. Zero dropped frames across 540 samples.</p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--dim-text)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>Samples</span><span style={{ color: 'var(--light-text)' }}>540 @ 5 Hz</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>Temp Range</span><span style={{ color: 'var(--light-text)' }}>25.40 – 32.87 °C</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span>Press Range</span><span style={{ color: 'var(--light-text)' }}>988.17 – 1093.80 hPa</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0' }}>
                  <span>Dropped Frames</span><span style={{ color: '#00ff88' }}>0</span>
                </div>
              </div>
              <div style={{ color: '#00ff88', fontSize: '0.75rem', marginTop: '1rem', fontWeight: 'bold' }}>✓ PASSED — April 7, 2026</div>
            </div>
 
            {/* ⏳ PENDING */}
            <div className="card" style={{ opacity: 0.6 }}>
              <h3>Propulsion &amp; ESC</h3>
              <p style={{ fontSize: '0.85rem' }}>Thrust-to-weight ratio verification and motor response latency under ArduPilot control.</p>
              <div className="text-orange" style={{ fontSize: '0.75rem', marginTop: '1rem', fontWeight: 'bold' }}>⏳ SCHEDULED — April 8</div>
            </div>
 
            {/* ⏳ PENDING */}
            <div className="card" style={{ opacity: 0.6 }}>
              <h3>Vision &amp; Landing</h3>
              <p style={{ fontSize: '0.85rem' }}>ArUco marker detection reliability at various altitudes and lighting conditions.</p>
              <div className="text-orange" style={{ fontSize: '0.75rem', marginTop: '1rem', fontWeight: 'bold' }}>⏳ SCHEDULED — April 8–9</div>
            </div>
          </div>
        </section>
 

        <section id="team" className="container">
          <h2>The Team</h2>
          <div className="grid">
            {team.map(member => (
              <div className="card" key={member.name}>
                <h3>{member.name}</h3>
                <p className="text-orange" style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: 'center' }}>
          <h2>Contact &amp; Links</h2>
          <p style={{ color: 'var(--dim-text)', marginTop: '1rem' }}>
            Follow the mission, reach out to the team, or explore our competition entry.
          </p>
          <div className="contact-links">
            <a
              href="https://www.esa.int/Education/CanSat"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              🛰️ ESA CanSat
            </a>
            <a
              href="mailto:cansat430@gmail.com"
              className="contact-link"
            >
              ✉️ Email Us
            </a>
            <a
              href="https://github.com/PottersGame"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              💻 GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 HYPERION CanSat Slovakia &mdash; Piaristické gymnázium Jozefa Braneckého, Trenčín</p>
        </div>
      </footer>
    </div>
  )
}

export default App
