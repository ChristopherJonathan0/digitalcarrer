import './Clients.css';

function Clients() {
  const logos = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Bank_KB_Bukopin_logo.svg/200px-Bank_KB_Bukopin_logo.svg.png', alt: 'KB Bukopin' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kredit_Plus_logo.svg/200px-Kredit_Plus_logo.svg.png', alt: 'Kredit Plus' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bank_Syariah_Indonesia_logo.svg/200px-Bank_Syariah_Indonesia_logo.svg.png', alt: 'BSI' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mirae_Asset_logo.svg/200px-Mirae_Asset_logo.svg.png', alt: 'Mirae Asset' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kalbe_Farma_logo.svg/200px-Kalbe_Farma_logo.svg.png', alt: 'Kalbe' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Maybank_logo.svg/200px-Maybank_logo.svg.png', alt: 'Maybank' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yamaha_Motor_Logo.svg/200px-Yamaha_Motor_Logo.svg.png', alt: 'Yamaha' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Indosat_Ooredoo_logo.svg/200px-Indosat_Ooredoo_logo.svg.png', alt: 'Indosat' },
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <p className="label">DIPERCAYA OLEH PERUSAHAAN TERKEMUKA DI INDONESIA</p>
        <div className="clients-grid">
          {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;