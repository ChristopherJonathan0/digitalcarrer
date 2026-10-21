import './ServicesList.css';

function ServicesList() {
  const services = [
    {
      icon: 'fa-solid fa-code',
      title: 'Web Development',
      desc: 'Pembuatan website responsif, cepat, dan aman menggunakan teknologi modern (Next.js/React).',
      features: ['Custom Frontend & Backend', 'SEO Optimization', 'CMS Integration'],
    },
    {
      icon: 'fa-regular fa-object-ungroup',
      title: 'UI/UX Design',
      desc: 'Perancangan antarmuka intuitif dan berfokus pada kenyamanan serta konversi pengguna.',
      features: ['Wireframing & Prototyping', 'Design System', 'User Research'],
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobile App Development',
      desc: 'Aplikasi mobile iOS & Android berkemampuan tinggi dengan pengalaman pengguna yang mulus.',
      features: ['Cross-Platform (Flutter/React Native)', 'API Integration', 'App Store Deployment'],
    },
    {
      icon: 'fa-solid fa-pen-nib',
      title: 'Digital Branding & Identity',
      desc: 'Membangun identitas visual brand yang kuat, berkarakter, dan profesional.',
      features: ['Logo & Visual Identity', 'Brand Guidelines', 'Marketing Assets'],
    },
  ];

  return (
    <section className="services-list-section container">
      <div className="section-header">
        <span className="subtitle">PILIHAN LAYANAN</span>
        <h2>Layanan Unggulan Kami</h2>
        <p>Solusi terintegrasi untuk membantu bisnis Anda tumbuh pesat di era digital.</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="card-icon">
              <i className={s.icon}></i>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <hr />
            <div className="features">
              <h4>FITUR & DELIVERABLES</h4>
              <ul>
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesList;