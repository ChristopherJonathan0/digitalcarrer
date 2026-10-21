import { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductsGrid.css';

const API = import.meta.env.VITE_API_URL;

function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API}/products`)
      .then(res => setProducts(res.data))
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading produk...</p>;
  if (error) return <p style={{ padding: 40, color: 'red' }}>Error: {error}</p>;

  return (
    <section className="products-section">
      <div className="container">
        <div className="product-grid">
          {products.length > 0 ? (
            products.map(product => (
              <div key={product.id} className="product-card">
                <div className="card-image">
                  <img src={`/images/${product.gambar}`} alt={product.judul} />
                </div>
                <div className="card-body">
                  <span className="tag">{product.kategori}</span>
                  <h3>{product.judul}</h3>
                  <p>{product.deskripsi}</p>
                  <a href={`/product/${product.id}`} className="btn-card">
                    Lihat Detail Produk
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <h3>Belum ada produk yang ditambahkan.</h3>
              <p>Silakan tambahkan produk melalui halaman admin terlebih dahulu.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductsGrid;