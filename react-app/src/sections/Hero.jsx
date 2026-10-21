import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Perjalanan <span className="highlight">Transformasi Digital</span>
          <br />Anda Dimulai di Sini
        </h1>
        <p>
          Digital Center siap membantu bisnis Anda tumbuh lewat solusi UI/UX,
          pengembangan aplikasi, dan sistem keamanan terdepan.
        </p>
        <div className="hero-buttons">
          <a href="/contact" className="btn-primary">Konsultasi Gratis</a>
          <a href="/works" className="btn-outline">Lihat Portofolio</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;