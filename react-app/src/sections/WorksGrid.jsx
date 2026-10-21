import { useState, useEffect } from 'react';
import axios from 'axios';
import './WorksGrid.css';

const API = import.meta.env.VITE_API_URL;

function WorksGrid() {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API}/works`)
      .then(res => setWorks(res.data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading portofolio...</p>;
  if (error) return <p style={{ padding: 40, color: 'red' }}>Error: {error}</p>;

  // Bagi data: 2 pertama → baris 1 (2 kolom), sisanya → baris berikut (3 kolom)
  const firstRow = works.slice(0, 2);
  const rest = works.slice(2);

  // Chunk rest menjadi grup berisi 3
  const chunks = [];
  for (let i = 0; i < rest.length; i += 3) {
    chunks.push(rest.slice(i, i + 3));
  }

  return (
    <section className="works-section">
      <div className="container">
        {works.length > 0 ? (
          <>
            {/* ROW 1: 2 Kolom */}
            {firstRow.length > 0 && (
              <div className="grid-2-col">
                {firstRow.map(work => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            )}

            {/* ROW 2+: 3 Kolom per baris */}
            {chunks.map((chunk, i) => (
              <div key={i} className="grid-3-col">
                {chunk.map(work => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            ))}
          </>
        ) : (
          <div className="empty-state">
            <h3>Belum ada portofolio yang ditambahkan.</h3>
            <p>Silakan tambahkan portofolio melalui halaman admin terlebih dahulu.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Komponen Card (dipisah biar reusable)
function WorkCard({ work }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={`/images/${work.gambar}`} alt={work.judul} />
      </div>
      <div className="card-content">
        <span className="tag">{work.kategori}</span>
        <h3>{work.judul}</h3>
        <p>{work.deskripsi}</p>
      </div>
    </div>
  );
}

export default WorksGrid;