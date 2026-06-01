import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", Icon: FaTwitter },
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
];

function Navbar() {
  const [showServices, setShowServices] = useState(false);

  const navLink =
    "text-slate-700 hover:text-brand-600 font-medium transition text-[15px]";

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-white transition p-1"
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-gray-300">
            <a
              href="mailto:info@teachkaam.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <MdEmail className="text-lg" />
              <span>Email</span>
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <MdPhone className="text-lg" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Logo variant="dark" />

          <div className="hidden lg:flex items-center gap-7">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/about" className={navLink}>
              Why TeachKaam
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link
                to="/services"
                className={`${navLink} flex items-center gap-1`}
              >
                Services
              </Link>

              {showServices && (
                <div className="absolute top-full left-0 w-96 bg-white border border-gray-200 rounded-lg shadow-xl p-5 z-[9999]">
                  {" "}
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li>
                      <Link to="/pos-system" className="hover:text-brand-600">
                        Cloud POS System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/fbr-integration"
                        className="hover:text-brand-600"
                      >
                        FBR Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pra-integration"
                        className="hover:text-brand-600"
                      >
                        PRA Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tax-integration"
                        className="hover:text-brand-600"
                      >
                        Tax Integration
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/industrial-erp"
                        className="hover:text-brand-600"
                      >
                        Industrial ERP AI Based
                      </Link>
                    </li>
                    <li>
                      <Link to="/scada" className="hover:text-brand-600">
                        SCADA Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-development"
                        className="hover:text-brand-600"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/app-development"
                        className="hover:text-brand-600"
                      >
                        App Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/whatsapp-api" className="hover:text-brand-600">
                        WhatsApp API Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="/email-api" className="hover:text-brand-600">
                        Email API Integration
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink}>
              Portfolio
            </Link>
            <Link to="/blog" className={navLink}>
              Blogs
            </Link>
            <Link to="/demo" className={navLink}>
              Demo
            </Link>
            <Link to="/contact" className={navLink}>
              Contact Us
            </Link>

            <Link
              to="/try-now"
              className="ml-auto bg-brand-700 text-white px-5 py-2 rounded font-semibold border-2 border-brand-700 hover:bg-white hover:text-brand-700 transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
