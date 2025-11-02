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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = {
    industries: [
      { title: "Finance & Banking", href: "#finance" },
      { title: "Healthcare", href: "#health" },
      { title: "Education", href: "#education" },
      { title: "Manufacturing", href: "#manufacturing" },
    ],
    products: [
      { title: "Smart ERP", href: "#erp" },
      { title: "CRM Solutions", href: "#crm" },
      { title: "Analytics Dashboard", href: "#analytics" },
      { title: "AI Chatbot", href: "#chatbot" },
    ],
    services: [
      { title: "Software Development", href: "#software" },
      { title: "Cloud Solutions", href: "#cloud" },
      { title: "Cybersecurity", href: "#cyber" },
      { title: "IT Consulting", href: "#consulting" },
    ],
  };

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Blog", href: "#blogs" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-3xl border-b border-gray-100 shadow-sm fixed top-0 w-full z-50">
        {/* Top Bar */}
        <div className="items-center gap-3 md:flex bg-black text-gray-200 justify-between md:px-7 px-4 md:py-2 w-full hidden ">
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
            href="/"
            className="font-extrabold text-2xl text-indigo-600 tracking-tight"
          >
            ORIMARK
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
                <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-indigo-600">
                  {title.charAt(0).toUpperCase() + title.slice(1)}{" "}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown */}
                {openDropdown === title && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg p-2 animate-fadeIn">
                    {links.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {menuItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700"
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
          <span className="font-bold text-indigo-600 text-xl">ORIMARK</span>
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
                    <a
                      href={sub.href}
                      className="block text-gray-700 hover:text-indigo-600 text-sm py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
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
