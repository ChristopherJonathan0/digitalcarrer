import { useState, useEffect } from 'react';
import axios from 'axios';
import './Portfolio.css';
const API = import.meta.env.VITE_API_URL;

function Portfolio() {
  const [portofolios, setPortofolios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API}/portofolios`)
      .then(res => setPortofolios(res.data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading portofolio...</p>;
  if (error) return <p style={{ padding: 40, color: 'red' }}>Error: {error}</p>;

  return (
    <section className="section portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">PORTFOLIO</span>
          <h2 className="section-title">Karya Terbaik yang Menghasilkan Dampak Real</h2>
          <p className="section-subtitle">
            Lihat bagaimana kami membantu berbagai industri mentransformasi ide menjadi produk digital kelas dunia.
          </p>
        </div>

        <div className="portfolio-grid">
          {portofolios.length > 0 ? (
            portofolios.map(p => (
              <div key={p.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={`/images/${p.gambar}`} alt={p.judul} />
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-tag">{p.kategori}</span>
                  <h3>{p.judul}</h3>
                  <p>{p.subjudul}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">Belum ada portofolio.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;