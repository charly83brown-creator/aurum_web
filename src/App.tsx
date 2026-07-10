import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Advantage } from './components/Advantage';
import { Trust } from './components/Trust';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <Advantage />
        <Trust />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
