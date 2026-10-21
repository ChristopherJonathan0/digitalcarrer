import Navbar from '../components/Navbar';
import ProductsHero from '../sections/ProductsHero';
import ProductsGrid from '../sections/ProductsGrid';
import Footer from '../components/Footer';

function Product() {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </>
  );
}

export default Product;