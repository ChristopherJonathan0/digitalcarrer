import Navbar from '../components/Navbar';
import ServicesHero from '../sections/ServicesHero';
import ServicesList from '../sections/ServicesList';
import Workflow from '../sections/Workflow';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';
import './Services.css';

function Services() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <main className="main-content">
        <ServicesList />
        <Workflow />
        <div className="cta-wrapper">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Services;