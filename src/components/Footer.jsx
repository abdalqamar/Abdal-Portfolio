import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-4 text-center">
        {/* Footer Links */}
        <div className="flex justify-center gap-6 mb-4 text-gray-700 flex-wrap">
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link to="/terms" className="hover:text-blue-600 transition">
            Terms & Conditions
          </Link>

          <Link to="/privacy" className="hover:text-blue-600 transition">
            Privacy Policy
          </Link>

          <Link to="/refund" className="hover:text-blue-600 transition">
            Refund & Cancellation
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact Us
          </Link>
        </div>

        <p className="text-gray-600">
          &copy; 2025 Abdal Qamar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
