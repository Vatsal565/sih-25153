"use client"

import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold text-white">PM-AJAY</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Pradhan Mantri Anusuchit Jaati Abhyuday Yojana is a flagship program of the Government of India for comprehensive development of Scheduled Caste communities through strategic interventions in education, health, livelihood, and infrastructure.
            </p>
            <p className="text-xs text-gray-500">
              Ministry of Social Justice and Empowerment, Government of India
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About PM-AJAY</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Scheme Guidelines</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">State Portals</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">RTI Section</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>support@pmajay.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 PM-AJAY. All rights reserved. Government of India.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
