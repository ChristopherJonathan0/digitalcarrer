import Navbar from '../components/Navbar';
import AboutHero from '../sections/AboutHero';
import Clients from '../sections/Clients';
import Values from '../sections/Values';
import Team from '../sections/Team';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Clients />
      <Values />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}

export default About;