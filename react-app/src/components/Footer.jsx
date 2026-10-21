import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Kolom 1: Brand + Newsletter */}
        <div className="footer-brand">
          <div className="footer-logo">
            DigitalCenter <span className="logo-icon">✨</span>
          </div>
          <p>Membantu bisnis mentransformasi ide digital menjadi produk kelas dunia.</p>
          <div className="newsletter">
            <input type="email" placeholder="Email Anda" />
            <button type="button">Kirim</button>
          </div>
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/services">Layanan</a></li>
            <li><a href="/works">Portofolio</a></li>
            <li><a href="/testimoni">Testimoni</a></li>
          </ul>
        </div>

        {/* Kolom 3: Perusahaan */}
        <div className="footer-links">
          <h4>Perusahaan</h4>
          <ul>
            <li><a href="/about">Tentang Kami</a></li>
            <li><a href="/career">Karir</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 4: Media Sosial */}
        <div className="footer-links">
          <h4>Media Sosial</h4>
          <ul>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <p>&copy; 2026 IFT Group. All rights reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;