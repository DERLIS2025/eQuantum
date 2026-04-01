import Capacidades from '@/components/Capacidades';
import Casos from '@/components/Casos';
import Contacto from '@/components/Contacto';
import Credibilidad from '@/components/Credibilidad';
import Diferencial from '@/components/Diferencial';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SolucionDestacada from '@/components/SolucionDestacada';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferencial />
        <Capacidades />
        <SolucionDestacada />
        <Casos />
        <Credibilidad />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
