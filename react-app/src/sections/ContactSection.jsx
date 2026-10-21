import { useState } from 'react';
import axios from 'axios';
import './ContactSection.css';

const API = import.meta.env.VITE_API_URL;

function ContactSection() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    layanan: '',
    ideproyek: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await axios.post(`${API}/contacts`, form);
      setShowModal(true);
      setForm({ nama: '', email: '', layanan: '', ideproyek: '' });

      // Redirect ke WhatsApp setelah 3 detik
      setTimeout(() => {
        const noWA = '6289622910009';
        const pesan = encodeURIComponent(
          'Halo admin, saya sudah mengirim form contact.'
        );
        window.location.href = `https://wa.me/${noWA}?text=${pesan}`;
      }, 3000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
          'Terjadi kesalahan. Silakan coba lagi.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="contact-section">
        <div className="contact-left">
          <p className="small-title">HUBUNGI KAMI</p>

          <div className="text-content">
            <h1>
              Mari Bicarakan Proyek<br />Digital Anda
            </h1>
            <p>
              Punya ide atau butuh solusi digital? Tim kami siap membantu
              merealisasikannya.
            </p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              placeholder="Masukkan nama Anda"
              value={form.nama}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="nama@perusahaan.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <select
              name="layanan"
              value={form.layanan}
              onChange={handleChange}
              required
            >
              <option value="">Pilih jenis layanan..</option>
              <option value="website">Website</option>
              <option value="uiux">UI/UX Design</option>
              <option value="database">Database</option>
              <option value="other">Lainnya</option>
            </select>

            <textarea
              name="ideproyek"
              placeholder="Ceritakan sedikit tentang proyek atau ide bisnis Anda..."
              value={form.ideproyek}
              onChange={handleChange}
              required
            ></textarea>

            {error && (
              <p style={{ color: 'red', fontSize: '0.85rem' }}>{error}</p>
            )}

            <button type="submit" disabled={submitting}>
              {submitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </main>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <svg viewBox="0 0 24 24">
                <polyline points="4 12, 10 18, 20 6"></polyline>
              </svg>
            </div>
            <h2>
              Pesan <span>Terikirim!</span>
            </h2>
            <p>
              Terima kasih! Kami akan alihkan anda ke WA admin kami yaaa.
              <br />
              Thanks YOUUU
            </p>
            <button onClick={closeModal} className="modal-btn">
              Kembali ke Beranda
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactSection;