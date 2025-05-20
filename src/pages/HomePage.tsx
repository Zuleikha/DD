import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturedCategories from '../components/home/FeaturedCategories';
import MapSection from '../components/home/MapSection';
import CommunitySection from '../components/home/CommunitySection';
import BlogPreview from '../components/home/BlogPreview';
import NewsletterSection from '../components/home/NewsletterSection';
import ChatbotWidget from '../components/common/ChatbotWidget';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCategories />
        <MapSection />
        <CommunitySection />
        <BlogPreview />
        <NewsletterSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default HomePage;
