import { useState, useEffect } from 'react';
import axios from 'axios';
import './Team.css';

const API = import.meta.env.VITE_API_URL;

function Team() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API}/teams`)
      .then(res => setTeams(res.data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading team...</p>;
  if (error) return <p style={{ padding: 40, color: 'red' }}>Error: {error}</p>;

  return (
    <section className="team-section">
      <div className="container">
        <span className="section-badge">TIM KAMI</span>
        <h2 className="section-title">Orang-Orang Hebat di Balik Layar</h2>
        <p className="section-subtitle">
          Kombinasi talenta kreatif dan teknis yang siap mewujudkan visi produk digital Anda.
        </p>

        <div className="team-grid">
          {teams.length > 0 ? (
            teams.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <img src={`/images/${member.foto}`} alt={member.nama} />
                </div>
                <h3>{member.nama}</h3>
                <p className="role">{member.role}</p>
                <div className="team-social">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>Belum ada anggota tim.</h3>
              <p>Silakan tambahkan anggota tim melalui halaman admin.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Team;