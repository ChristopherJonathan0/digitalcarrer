import './Values.css';

function Values() {
  return (
    <section className="values-section">
      <div className="container">
        <span className="section-badge">NILAI UTAMA</span>
        <h2 className="section-title">Prinsip Utama yang Menjadi Fondasi Kerja Kami</h2>
        <p className="section-subtitle">
          Kami tidak cuma membuat produk digital, tapi juga membangun pengalaman yang memberikan dampak nyata bagi bisnis Anda.
        </p>

        <div className="values-grid">
          <div className="value-card featured">
            <div className="value-icon">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3>Desain Berbasis Dampak</h3>
            <p>Setiap piksel dan interaksi dirancang dengan tujuan khusus untuk meningkatkan konversi dan kenyamanan pengguna.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Kecepatan & Presisi</h3>
            <p>Eksekusi proyek secara efisien tanpa memotong kualitas, memanfaatkan workflow dan teknologi AI modern.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Kemitraan Transparan</h3>
            <p>Menunjukan kolaborasi, kejelasan, dan kepercayaan dengan klien.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;