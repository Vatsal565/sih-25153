'use client'
import { useState } from 'react';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'Overview', href: '/about/overview' },
        { name: 'Objectives', href: '/about/objectives' },
        { name: 'Mission & Vision', href: '/about/mission' },
      ]
    },
    {
      name: 'Schemes',
      href: '/schemes',
      dropdown: [
        { name: 'Poverty Alleviation', href: '/schemes/poverty' },
        { name: 'Adarsh Gram', href: '/schemes/adarsh-gram' },
        { name: 'Infrastructure Development', href: '/schemes/infrastructure' },
        { name: 'Skill Development', href: '/schemes/skill' },
      ]
    },
    { name: 'Beneficiaries', href: '/beneficiaries' },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Guidelines', href: '/resources/guidelines' },
        { name: 'Documents', href: '/resources/documents' },
        { name: 'Reports', href: '/resources/reports' },
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 p-2.5 rounded-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">PM-AJAY</span>
              <span className="text-xs text-gray-600 -mt-1">Scheduled Caste Development</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-teal-600 font-medium text-sm flex items-center gap-1 transition-colors rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/apply"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                  onClick={() => item.dropdown && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                </a>
                
                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/apply"
              className="block text-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-md mt-4"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}