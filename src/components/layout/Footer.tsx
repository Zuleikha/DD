import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-irish-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4 footer-heading">DogDays.ie</h3>
            <ul className="space-y-2 footer-text">
              <li><a href="/" className="footer-link hover:text-irish-stone transition-colors">Home</a></li>
              <li><a href="/about" className="footer-link hover:text-irish-stone transition-colors">About Us</a></li>
              <li><a href="/contact" className="footer-link hover:text-irish-stone transition-colors">Contact</a></li>
              <li><a href="/privacy" className="footer-link hover:text-irish-stone transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link hover:text-irish-stone transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 footer-heading">Services</h3>
            <ul className="space-y-2 footer-text">
              <li><a href="/vets" className="footer-link hover:text-irish-stone transition-colors">Find a Vet</a></li>
              <li><a href="/parks" className="footer-link hover:text-irish-stone transition-colors">Parks & Walks</a></li>
              <li><a href="/nutrition" className="footer-link hover:text-irish-stone transition-colors">Nutrition</a></li>
              <li><a href="/training" className="footer-link hover:text-irish-stone transition-colors">Dog Training</a></li>
              <li><a href="/grooming" className="footer-link hover:text-irish-stone transition-colors">Grooming Services</a></li>
              <li><a href="/places" className="footer-link hover:text-irish-stone transition-colors">Dog-Friendly Places</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-semibold mb-4 footer-heading">Community</h3>
            <ul className="space-y-2 footer-text">
              <li><a href="/forum" className="footer-link hover:text-irish-stone transition-colors">Discussion Forum</a></li>
              <li><a href="/marketplace" className="footer-link hover:text-irish-stone transition-colors">Marketplace</a></li>
              <li><a href="/adoption" className="footer-link hover:text-irish-stone transition-colors">Dogs for Adoption</a></li>
              <li><a href="/events" className="footer-link hover:text-irish-stone transition-colors">Events Calendar</a></li>
              <li><a href="/blog" className="footer-link hover:text-irish-stone transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 footer-heading">Stay Connected</h3>
            <p className="mb-4 footer-text">Subscribe to our newsletter for updates on dog-friendly places and events.</p>

            <form className="flex mb-6">
              <label htmlFor="footerNewsletterEmail" className="sr-only">Your Email Address</label>
              <input
                type="email"
                id="footerNewsletterEmail"
                name="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-irish-purple"
              />
              <button
                type="submit"
                className="bg-irish-purple hover:bg-irish-purple/90 px-4 py-2 rounded-r-md text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-4">
              <a href="https://facebook.com" className="footer-text hover:text-irish-stone transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="footer-text hover:text-irish-stone transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="footer-text hover:text-irish-stone transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 pt-8 border-t border-gray-500">
          <h3 className="text-lg font-semibold mb-4 footer-heading">Partner Organizations</h3>
          <div className="flex flex-wrap gap-4 footer-text">
            <a href="https://dogstrust.ie" className="footer-link hover:text-irish-stone transition-colors">Dogs Trust Ireland</a>
            <a href="https://ispca.ie" className="footer-link hover:text-irish-stone transition-colors">ISPCA</a>
            <a href="https://www.ikc.ie/" className="footer-link hover:text-irish-stone transition-colors">Irish Kennel Club</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm footer-text">
          <p>© {new Date().getFullYear()} DogDays.ie - All rights reserved. Made with ❤️ for Irish dog lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

