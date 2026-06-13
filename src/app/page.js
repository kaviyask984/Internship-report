import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Books from '@/components/Books';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Books />
      <Contact />
      <Footer />
    </main>
  );
}
