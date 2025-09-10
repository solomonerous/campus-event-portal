import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { EventsPage } from './components/EventsPage';
import { GalleryPage } from './components/GalleryPage';
import { FeedbackPage } from './components/FeedbackPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'feedback':
        return <FeedbackPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={handlePageChange}>
      {renderPage()}
    </Layout>
  );
}