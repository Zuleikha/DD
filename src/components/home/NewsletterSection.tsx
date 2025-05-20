import React from 'react';
import { Send } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#4A90E2] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for the latest dog-friendly places and events across Ireland
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
            />
            <button className="px-6 py-3 bg-[#F5A623] hover:bg-[#E09612] text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center">
              <span>Subscribe</span>
              <Send className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <p className="mt-4 text-sm opacity-80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
