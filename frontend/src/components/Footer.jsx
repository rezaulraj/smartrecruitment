import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Contact", url: "/contact" },
  ];

  const workerLinks = [
    { name: "Register", url: "/worker/register" },
    { name: "Job Search", url: "/jobs" },
    { name: "Requirements", url: "/worker/requirements" },
    { name: "FAQ", url: "/faq" },
  ];

  const resources = [
    { name: "Blog", url: "/blog" },
    { name: "News", url: "/news" },
    { name: "Guides", url: "/guides" },
    { name: "Help Center", url: "/help" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, url: "#" },
    { name: "Twitter", icon: <FaTwitter />, url: "#" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
    { name: "Instagram", icon: <FaInstagram />, url: "#" },
    { name: "Youtube", icon: <FaYoutube />, url: "#" },
  ];
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4  pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-primary transition-colors text-center"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Workers */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2">For Workers</h3>
            <ul className="space-y-2">
              {workerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 md:text-center pb-2">
              Connect With Us
            </h3>
            <div className="flex md:flex-row flex-col gap-2 md:items-center md:justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="md:hidden">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and bottom info */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaGlobe className="mr-2" />
            <span>Global Recruitment Solutions</span>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Smart Recruit. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
