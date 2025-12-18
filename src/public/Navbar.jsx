"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dropdowns = {
    industries: [
      { title: "Finance & Banking", path: "/finance" },
      { title: "Healthcare", path: "/health" },
      { title: "Education", path: "/education" },
      { title: "Manufacturing", path: "/manufacturing" },
    ],
    products: [
      { title: "Smart ERP", path: "/erp" },
      { title: "CRM Solutions", path: "/crm" },
      { title: "Analytics Dashboard", path: "/analytics" },
      { title: "AI Chatbot", path: "/chatbot" },
    ],
    services: [
      { title: "Software Development", path: "/software" },
      { title: "Cloud Solutions", path: "/cloud" },
      { title: "Cybersecurity", path: "/cyber" },
      { title: "IT Consulting", path: "/consulting" },
    ],
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blogs" },
    { name: "Global Presence", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50
  bg-white/10 backdrop-blur-xl
  transition-all duration-300 text-gray-300"
      >
        {/* Top Bar */}
        <div className="items-center gap-3 md:flex bg-black justify-between md:px-7 px-4 md:py-2 w-full hidden">
          <div className="md:flex md:gap-2">
            <span className="flex items-center gap-1">
              <Phone size={18} /> +234---------890
            </span>
            <span className="flex items-center gap-1">
              <Mail size={18} />
              youremail@gmail.com
            </span>
          </div>
          <div className="flex pt-4 gap-3">
            <Facebook size={20} />
            <X size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <a
            to="/"
            className="font-extrabold text-2xl text-indigo-900 tracking-tight flex gap-1"
          >
            <img
              src="./logo.jpg"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            ORIEMARK
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(dropdowns).map(([title, links]) => (
              <div
                key={title}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 font-medium text-gray-400 hover:text-indigo-600 cursor-pointer">
                  {title.charAt(0).toUpperCase() + title.slice(1)}{" "}
                  <ChevronDown
                    size={16}
                    className="group-open:rotate-180 transition-transform"
                  />
                </button>

                {/* Dropdown */}
                {openDropdown === title && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg p-2 animate-fadeIn cursor-pointer">
                    {links.map((ite, i) => (
                      <Link
                        key={i}
                        to={ite.path}
                        className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                      >
                        {ite.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-gray-400 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-100 "
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ===== Offcanvas Mobile Menu ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl border-r border-gray-100 transform transition-transform duration-300 ease-in-out z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-start text-start px-5 py-4 border-b">
          <span className="font-bold text-indigo-600 text-xl">ORIEMARK</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-5 space-y-3 overflow-y-auto h-[calc(100%-60px)]">
          {Object.entries(dropdowns).map(([key, items]) => (
            <details key={key} className="group">
              <summary className="flex justify-between items-start text-start cursor-pointer font-semibold text-indigo-600 capitalize">
                {key}
                <ChevronDown
                  className="group-open:rotate-180 transition-transform"
                  size={18}
                />
              </summary>
              <ul className="pl-3 mt-2 space-y-1">
                {items.map((sub, i) => (
                  <li key={i}>
                    <Link
                      to={sub.path}
                      className="block text-gray-700 hover:text-indigo-600 text-sm py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Dim Background Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
