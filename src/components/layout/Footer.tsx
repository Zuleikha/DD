import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // Make sure Lucide icons are imported

const Footer = () => {
  // You might want to add a simple state for the email input if you plan to handle submission with React
  // For now, I'm just adding the form structure and attributes.
  // const [newsletterEmail, setNewsletterEmail] = useState('');

  // const handleNewsletterSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission
  //   console.log("Subscribing email:", newsletterEmail);
  //   // Add your subscription logic here (e.g., API call)
  //   setNewsletterEmail(''); // Clear input after submission
  // };

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

            {/* !!! IMPORTANT CHANGE HERE: Wrapped input and button in a <form> tag !!! */}
            {/* Added a label for accessibility */}
            <form className="flex mb-6" /*onSubmit={handleNewsletterSubmit} */>
              <label htmlFor="footerNewsletterEmail" className="sr-only">Your Email Address</label> {/* Added sr-only for visual hiding and unique ID */}
              <input
                type="email"
                id="footerNewsletterEmail" // Changed ID to be unique within the entire application
                name="email"           // Consistent name for email input
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
                // value={newsletterEmail} // Uncomment if you add useState and onChange
                // onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit" // Crucial for form submission
                className="bg-[#F5A623] hover:bg-[#E09612] px-4 py-2 rounded-r-md text-white font-medium"
              >
                Subscribe
              </button>
            </form>

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
            
            <a href="https://dogstrust.ie" className="hover:text-[#F5A623]">Dogs Trust Ireland</a>
            <a href="https://ispca.ie" className="hover:text-[#F5A623]">ISPCA</a>
            <a href="https://www.ikc.ie/" className="hover:text-[#F5A623]">Irish Kennel Club</a>
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