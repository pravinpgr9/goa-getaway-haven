
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-goa-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">GoaGetaway</h3>
            <p className="text-white/80 mb-4">
              Discover the perfect Goan getaway. Luxury hotels and unforgettable 
              experiences in paradise.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/hotels" className="text-white/80 hover:text-white transition-colors">Hotels</Link>
              </li>
              <li>
                <Link to="/experiences" className="text-white/80 hover:text-white transition-colors">Experiences</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Goa</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-goa-coral mt-1 flex-shrink-0" />
                <span className="text-white/80">Calangute, North Goa, 403516, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-goa-coral flex-shrink-0" />
                <span className="text-white/80">+91 1234567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-goa-coral flex-shrink-0" />
                <span className="text-white/80">info@goagetaway.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} GoaGetaway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
