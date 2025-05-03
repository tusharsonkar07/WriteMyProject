
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WritersSection from '@/components/WritersSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WritersSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
