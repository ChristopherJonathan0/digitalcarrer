import './Stats.css';

function Stats() {
  const stats = [
    { value: '0', label: 'Proyek Selesai' },
    { value: '0%', label: 'Kepuasan Klien' },
    { value: '0', label: 'Tahun Pengalaman' },
    { value: '0', label: 'Pengalaman Industri' },
  ];

  return (
    <section className="stats-wrapper">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;