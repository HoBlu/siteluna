import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesCarousel from './components/ServicesCarousel';
import AccommodationSection from './components/AccommodationSection';
import FeaturesSection from './components/FeaturesSection';
import PhotoGallery from './components/PhotoGallery';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesCarousel />
      <AccommodationSection />
      <FeaturesSection />
      <PhotoGallery />
    </Layout>
  );
}
