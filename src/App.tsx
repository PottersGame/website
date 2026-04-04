import './App.css'

function App() {
  const team = [
    { name: "Adam Hrnčiar", role: "Software & Electronics", desc: "System architecture and dual-processor integration lead." },
    { name: "Matej Matúš", role: "Mechanical Design", desc: "CAD modeling and 3D printing of the active-descent chassis." },
    { name: "Matej Bulík", role: "Electronics & Software", desc: "Power systems and flight control firmware specialist." },
    { name: "Jakub Panák", role: "Outreach & Marketing", desc: "Public relations, documentation, and mission branding." }
  ];

  const specs = [
    { label: "Max Height", value: "115 mm" },
    { label: "Max Diameter", value: "66 mm" },
    { label: "Target Apogee", value: "150 m" },
    { label: "Descent Speed", value: "5 - 12 m/s" },
    { label: "Detection Range", value: "> 30 m" },
    { label: "Telemetry Rate", value: "≥ 1 Hz" }
  ];

  return (
    <div className="app">
      <header>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/logo.jpg" alt="HYPERION Logo" style={{ height: '40px', borderRadius: '4px' }} />
            <a href="#" className="logo">HYPERION</a>
          </div>
          <nav>
            <ul>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#data">Data</a></li>
              <li><a href="#tech">Stack</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </nav>
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

        <section id="mission" className="container">
          <h2>Mission Objectives</h2>
          <div className="grid">
            <div className="card">
              <h3>Primary</h3>
              <p>Measure atmospheric temperature and pressure during descent. Log data at 5Hz to SD card and transmit real-time telemetry via <strong>MAVLink</strong>.</p>
            </div>
            <div className="card">
              <h3>Secondary</h3>
              <p>Autonomous landing on a 3x3m <strong>ArUco marker</strong>. Real-time vision processing on Raspberry Pi Zero 2W guiding the MambaF405 MK2.</p>
            </div>
            <div className="card">
              <h3>Failsafe</h3>
              <p>Passive aerodynamic drag from extended motor arms and 3D-printed <strong>crumple zones</strong> for impact energy absorption.</p>
            </div>
          </div>
        </section>

        <section id="data" className="container" style={{ background: 'rgba(251, 109, 0, 0.03)', padding: '4rem 2rem', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center' }}>Mission Parameters</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
            {specs.map(spec => (
              <div key={spec.label} style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--dim-text)', textTransform: 'uppercase' }}>{spec.label}</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--orange)' }}>{spec.value}</div>
              </div>
            ))}
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
              <div className="tech-spec"><span className="tech-label">Power</span><span>GNB 1100mAh 2S HV</span></div>
              <div className="tech-spec"><span className="tech-label">ESCs</span><span>Racestar 35A</span></div>
            </div>
            <div className="card">
              <h3>Comms</h3>
              <div className="tech-spec"><span className="tech-label">Protocol</span><span>ELRS 2.4GHz</span></div>
              <div className="tech-spec"><span className="tech-label">Telemetry</span><span>CRSF / MAVLink</span></div>
              <div className="tech-spec"><span className="tech-label">Range</span><span>Long Range (TCXO)</span></div>
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
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 HYPERION CanSat Slovakia | Trenčín</p>
        </div>
      </footer>
    </div>
  )
}

export default App
