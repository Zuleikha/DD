import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Site Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">DogDays.ie</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F5A623]">Home</a></li>
              <li><a href="/about" className="hover:text-[#F5A623]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#F5A623]">Contact</a></li>
              <li><a href="/privacy" className="hover:text-[#F5A623]">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[#F5A623]">Terms of Use</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/vets" className="hover:text-[#F5A623]">Find a Vet</a></li>
              <li><a href="/parks" className="hover:text-[#F5A623]">Parks & Walks</a></li>
              <li><a href="/nutrition" className="hover:text-[#F5A623]">Nutrition</a></li>
              <li><a href="/training" className="hover:text-[#F5A623]">Dog Training</a></li>
              <li><a href="/grooming" className="hover:text-[#F5A623]">Grooming Services</a></li>
              <li><a href="/places" className="hover:text-[#F5A623]">Dog-Friendly Places</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="/forum" className="hover:text-[#F5A623]">Discussion Forum</a></li>
              <li><a href="/marketplace" className="hover:text-[#F5A623]">Marketplace</a></li>
              <li><a href="/adoption" className="hover:text-[#F5A623]">Dogs for Adoption</a></li>
              <li><a href="/events" className="hover:text-[#F5A623]">Events Calendar</a></li>
              <li><a href="/blog" className="hover:text-[#F5A623]">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for updates on dog-friendly places and events.</p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-[#F5A623] hover:bg-[#E09612] px-4 py-2 rounded-r-md text-white font-medium">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-[#F5A623]" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-[#F5A623]" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://twitter.com" className="hover:text-[#F5A623]" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Partner Organizations</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://dpssca.ie" className="hover:text-[#F5A623]">DPSSCA</a>
            <a href="https://dogstrust.ie" className="hover:text-[#F5A623]">Dogs Trust Ireland</a>
            <a href="https://ispca.ie" className="hover:text-[#F5A623]">ISPCA</a>
            <a href="https://irishkennelclub.ie" className="hover:text-[#F5A623]">Irish Kennel Club</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DogDays.ie - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
