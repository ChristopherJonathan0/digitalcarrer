import './AboutHero.css';

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container">
        <span className="badge">TENTANG DIGITALCENTER</span>
        <h1>
          Membangun Masa Depan Digital<br />
          Melalui Desain dan<br />
          Teknologi Modern
        </h1>
        <p>
          Kami adalah tim desainer, developer, dan pemikir kreatif yang
          berdedikasi untuk mentransformasi ide kompleks menjadi produk
          digital yang presisi, berdampak, dan disukai pengguna.
        </p>
      </div>

      <div className="container">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Tim DigitalCenter Meeting"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;