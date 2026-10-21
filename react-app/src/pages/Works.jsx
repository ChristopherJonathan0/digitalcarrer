import Navbar from '../components/Navbar';
import WorksHero from '../sections/WorksHero';
import WorksGrid from '../sections/WorksGrid';
import Footer from '../components/Footer';
import './Works.css';

function Works() {
  return (
    <>
      <Navbar />
      <main>
        <WorksHero />
        <WorksGrid />
      </main>
      <Footer />
    </>
  );
}

export default Works;