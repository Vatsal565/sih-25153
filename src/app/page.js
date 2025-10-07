import Hero from '@/components/Landing/Hero';
import KeyStats from '@/components/Landing/KeyStats';
import OfficialDocuments from '@/components/Landing/OfficialDocuments';
import AdarshGram from '@/components/Landing/AdarshGram';
import SuccessStories from '@/components/Landing/SuccessStories';
import Convergence from '@/components/Landing/Convergence';
import Helpdesk from '@/components/Landing/Helpdesk';
import Footer from '@/components/Landing/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <KeyStats />
      <OfficialDocuments />
      <AdarshGram />
      <SuccessStories />
      <Convergence />
      <Helpdesk />
      <Footer />
    </>
  );
}
