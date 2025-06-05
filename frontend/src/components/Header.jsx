import React, { useState } from "react";
import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiUser,
  FiBook,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeSubnav, setActiveSubnav] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  const navItems = [
    {
      name: "About",
      path: "/about-us",
      icon: <FiHome className="mr-2" />,
    },
    {
      name: "Employer",
      path: "/employer",
      icon: <FiBriefcase className="mr-2" />,
    },
    {
      name: "Partner",
      path: "/partner",
      icon: <FiUsers className="mr-2" />,
    },
    {
      name: "Candidates",
      icon: <FiUser className="mr-2" />,
      subNav: [
        {
          name: "Browse Job",
          path: "/jobs",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Skills & Language Training",
          path: "/skills-and-language-training",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Hall of Fame",
          path: "/hall-of-fame",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Visa and Relocation Guidance",
          path: "/visa-and-relocation-guidance",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
      ],
    },
    {
      name: "Resources",
      icon: <FiBook className="mr-2" />,
      subNav: [
        {
          name: "Career",
          path: "/career",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Blogs",
          path: "/blogs",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Talent Hub",
          path: "/talent-hub",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
        {
          name: "Interview Tips",
          path: "/interview-tips",
          icon: <FiExternalLink className="mr-2 text-xs" />,
        },
      ],
    },
  ];

  const toggleSubnav = (index) => {
    setActiveSubnav(activeSubnav === index ? null : index);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[99999]">
      <nav className="max-w-screen-xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-bold font-poppins flex items-center"
            >
              <span className="text-gray-900">Smart</span>
              <span className="text-primary ml-1">Recruit</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      hoveredNav === index
                        ? "text-primary bg-blue-50"
                        : "text-gray-700 hover:text-primary hover:bg-blue-50"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleSubnav(index)}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      hoveredNav === index || activeSubnav === index
                        ? "text-primary bg-blue-50"
                        : "text-gray-700 hover:text-primary hover:bg-blue-50"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                    {activeSubnav === index ? (
                      <FiChevronUp className="ml-1.5 text-sm" />
                    ) : (
                      <FiChevronDown className="ml-1.5 text-sm" />
                    )}
                  </button>
                )}

                {/* Hover-based subnav */}
                {item.subNav &&
                  (hoveredNav === index || activeSubnav === index) && (
                    <div
                      className={`absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 transition-all duration-200 ${
                        hoveredNav === index || activeSubnav === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-1 pointer-events-none"
                      }`}
                    >
                      {item.subNav.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                        >
                          {subItem.icon}
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <div className="ml-4">
              <Link to={"/contacts"} className="bg-primary px-5 py-2.5 text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm flex items-center">
                <FiPhone className="mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-md hover:bg-blue-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 bg-white shadow-md rounded-lg mt-1">
            <div className="space-y-1 px-2">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="flex items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSubnav(index)}
                        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <div className="flex items-center">
                          {item.icon}
                          {item.name}
                        </div>
                        {activeSubnav === index ? (
                          <FiChevronUp className="text-gray-500" />
                        ) : (
                          <FiChevronDown className="text-gray-500" />
                        )}
                      </button>
                      {activeSubnav === index && (
                        <div className="pl-8 space-y-1 mt-1">
                          {item.subNav.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="flex items-center px-3 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-blue-50 rounded-md transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.icon}
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="flex items-center px-3 py-3 text-base font-medium bg-primary text-white rounded-md mt-2 hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiPhone className="mr-2" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
