import './Workflow.css';

function Workflow() {
  const steps = [
    { num: '01', title: 'Discovery & Strategy', desc: 'Riset mendalam tentang kebutuhan bisnis, target pasar, dan menentukan fondasi proyek.' },
    { num: '02', title: 'UI/UX Design', desc: 'Merancang wireframe, antarmuka visual, dan prototipe interaktif untuk diuji coba.' },
    { num: '03', title: 'Development', desc: 'Mengubah desain menjadi kode bersih, cepat, dan aman menggunakan teknologi modern.' },
    { num: '04', title: 'Testing & Launch', desc: 'Pengujian performa menyeluruh, perbaikan bug, dan peluncuran produk ke publik.' },
  ];

  return (
    <section className="workflow-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">ALUR KERJA</span>
          <h2>Proses Transparan dari Awal Hingga Rilis</h2>
        </div>

        <div className="workflow-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <span className="step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;