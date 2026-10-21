import './Services.css';

function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">KEAHLIAN KAMI</span>
          <h2 className="section-title">Solusi Digital Ujung-ke-Ujung untuk Bisnis Anda</h2>
          <p className="section-subtitle">
            Kami menghadirkan layanan teknologi terpadu untuk mendorong efisiensi dan pertumbuhan skala bisnis.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Featured */}
          <div className="bento-card featured">
            <div className="bento-icon"><i className="fa-solid fa-palette"></i></div>
            <h3>UI/UX Research & Design</h3>
            <p>Riset mendalam dan perancangan antarmuka intuitif untuk pengalaman pengguna.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>Web & App Development</h3>
            <p>Pengembangan aplikasi web dan mobile yang responsif, cepat, dan aman.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <h3>Cyber Security</h3>
            <p>Protection & audit keamanan infrastruktur digital untuk menjaga data bisnis.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><i className="fa-solid fa-bolt"></i></div>
            <h3>Customer Experience & IoT</h3>
            <p>Optimasi interaksi pelanggan dan integrasi sistem perangkat pintar.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><i className="fa-solid fa-pen-nib"></i></div>
            <h3>Logo & Branding</h3>
            <p>Identitas visual dan perancangan brand yang kuat serta professional.</p>
          </div>

          <div className="bento-card">
            <div className="bento-icon"><i className="fa-solid fa-bullhorn"></i></div>
            <h3>Digital Marketing</h3>
            <p>Protection & audit keamanan infrastruktur digital untuk menjaga data bisnis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;