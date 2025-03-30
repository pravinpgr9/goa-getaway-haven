
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedHotels from "@/components/home/FeaturedHotels";
import ExperiencesSection from "@/components/home/ExperiencesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedHotels />
      <ExperiencesSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </Layout>
  );
};

export default Index;
