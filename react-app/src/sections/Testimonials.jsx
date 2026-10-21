import { useState, useEffect } from 'react';
import axios from 'axios';
import './Testimonials.css';

const API = import.meta.env.VITE_API_URL;

function Testimonials() {
  const [testimonis, setTestimonis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API}/testimonis`)
      .then(res => setTestimonis(res.data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading testimoni...</p>;
  if (error) return <p style={{ padding: 40, color: 'red' }}>Error: {error}</p>;

  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">TESTIMONIAL</span>
          <h2 className="section-title">Dipercaya oleh Para Pemimpin Industri</h2>
          <p className="section-subtitle">
            Pengalaman nyata dari klien yang telah mentransformasi bisnis mereka bersama kami.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonis.length > 0 ? (
            testimonis.map(t => (
              <div key={t.id} className="testimonial-card">
                <p className="testimonial-text">{t.isi_testimoni}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img src={`/images/${t.foto}`} alt={t.nama} />
                  </div>
                  <div className="testimonial-info">
                    <h4>{t.nama}</h4>
                    <p>{t.jabatan}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">Belum ada testimoni.</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;